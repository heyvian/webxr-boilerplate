module.exports = function(dirs, helpers){

    const alias = require('@rollup/plugin-alias');
    const colors = require('ansi-colors');
    const del = require('del');
    const fancyLog = require('fancy-log');
    const glob = require('glob');
    const rollup = require('rollup');
    const rollupResolve = require('@rollup/plugin-node-resolve');
    const rollupTerser = require('rollup-plugin-terser');
    const watch = require('gulp-watch');

    const tasks = {

        default: function(){
            return this.transpile();
        },

        watch: function(){
            this.default();
            watch(helpers.getMergedInputs(['js-transpile']), this.transpile.bind(this, true));
        },

        transpile: function(watch) {

            const paths = helpers.getPaths(['js-transpile']);
            const processes = [];

            const plugins = [
                rollupResolve.nodeResolve(),
                alias({
                    entries: dirs.moduleAliases
                })
            ];

            if (!process.argv.includes('--development') && !process.argv.includes('--dev')) {
                plugins.push(
                    rollupTerser.terser({
                        keep_fnames: true,
                        compress: {
                            drop_debugger: false
                        }
                    }))
            }

            if (watch) fancyLog(`Starting '${colors.cyan('transpile')}'...`);

            for (let key in paths) {
                processes.push(new Promise(resolve => {
                    const path = paths[key];

                    // build out list of modules
                    let modules = [];
                    let inputs = Array.isArray(path.input) ? path.input : [path.input];
                    inputs.forEach(input => {
                        modules = modules.concat(glob.sync(input));
                    });

                    // delete the output directory to keep it clean
                    del(path.output).then(() => {
                        // initiate rollup
                        rollup.rollup({
                            input: modules,
                            plugins: plugins,
                        }).then(bundle => {
                            // write files to output directory
                            return bundle.write({
                                dir: path.output,
                                format: 'es',
                                minifyInternalExports: true,
                                compact: true,
                                chunkFileNames: '[hash].js',
                            })
                        }).then(bundle => {
                            resolve();
                        });
                    });
                }));
            }

            if (watch) {
                Promise.all(processes).then(() => {
                    fancyLog(`Finished '${colors.cyan('transpile')}'`);
                });
            }

            return Promise.all(processes);
        }

    }

    return tasks;

}