module.exports = function(dirs, helpers){

    // const cached = require('gulp-cached');
    // const dependents = require('gulp-dependents');
    const del = require('del');
    const glob = require('glob');
    const gulp = require('gulp');
    // const mergeStream = require('merge-stream');
    // const minify = require('gulp-minify');
    // const notify = require('gulp-notify');
    const watch = require('gulp-watch');
    // const notifier = require('node-notifier');
    const fancyLog = require('fancy-log');
    const colors = require('ansi-colors');

    const rollup = require('rollup');
    const rollupResolve = require('@rollup/plugin-node-resolve');
    const alias = require('@rollup/plugin-alias');
    const rollupTerser = require('rollup-plugin-terser');

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
                // initialize npm module name resolver
                rollupResolve.nodeResolve(),
                // initialize module aliaser
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