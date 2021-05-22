module.exports = function(dirs, helpers){

    const autoprefixer = require('gulp-autoprefixer');
    const cached = require('gulp-cached');
    const cleancss = require('gulp-clean-css');
    const dependents = require('gulp-dependents');
    const gulp = require('gulp');
    const mergeStream = require('merge-stream');
    const notify = require('gulp-notify');
    const rename = require('gulp-rename');
    const sass = require('gulp-sass');
    const sourcemaps = require('gulp-sourcemaps');
    const stylelint = require('gulp-stylelint');
    const watch = require('gulp-watch');

    const tasks = {

        default: function(){
            this.compile();
            this.lint();
        },

        watch: function(){
            this.default();
            watch(helpers.getMergedInputs(['scss', 'scss-compile']), this.compile.bind(this));
            watch(helpers.getMergedInputs(['scss', 'scss-lint']), this.lint.bind(this));
        },

        compile: function(){
            const paths = helpers.getPaths(['scss', 'scss-compile']);
            const processes = mergeStream();

            paths.forEach(path => {
                let process = gulp.src(path.input)
                    // filter out any non-changed files
                    .pipe(cached('scss-compile'))
                    .pipe(dependents())
                    // compile
                    .pipe(sourcemaps.init())
                    .pipe(
                        sass({
                            includePaths: [
                                dirs.nodeModules,
                                dirs.themes
                            ],
                            outputStyle: 'expanded'
                        })
                        .on('error', sass.logError)
                    )
                    // .on('error', error => helpers.notifyError(error, 'error')) 
                    // automatically insert vendor prefixes
                    .pipe(
                        autoprefixer({
                            grid: true
                        })
                    )
                    // write sourcemaps
                    .pipe(sourcemaps.write())
                    // write output
                    .pipe(gulp.dest(path.output))
                    // minify
                    .pipe(cleancss())
                    // save minified output
                    .pipe(rename(rename => rename.extname = '.min.css'))
                    .pipe(gulp.dest(path.output))
                    // show success notification
                    // .pipe(notify({
                    //     title: 'File Compiled',
                    //     message: '<%= file.relative %>'
                    // }));

                processes.add(process);
            });
            // ignore errors on merged stream (should be handled in individual stream)
            processes.on('error', error => {});
            // show success notification
            // processes.pipe(notify({
            //     title: 'Compiling Complete',
            //     message: 'All files compiled',
            //     onLast: true
            // }));
        },

        lint: function(){
            const paths = helpers.getPaths(['scss', 'scss-lint']);
            const processes = mergeStream();

            paths.forEach(path => {
                let process = gulp.src(path.input)
                    // lint
                    .pipe(stylelint({
                        reporters: [
                            { formatter: 'string', console: true }
                        ]
                    }))
                    // show warning notification
                    // .on('error', error => helpers.notifyError(error, 'warning', 'There are lint errors that require your attention'));

                processes.add(process);
            });
            // ignore errors on merged stream (should be handled in individual stream)
            processes.on('error', error => {});
        },

        fix: function(){
            const paths = helpers.getPaths(['scss', 'scss-lint']);
            const processes = mergeStream();

            paths.forEach(path => {
                let process = gulp.src(path.input, { base: './' })
                    // lint
                    .pipe(stylelint({
                        fix: true,
                        reporters: [
                            { formatter: 'string', console: false }
                        ]
                    }))
                    // show warning notification
                    .on('error', error => helpers.notifyError(error, 'error'))
                    // write fixes to source file
                    .pipe(gulp.dest('.'));

                processes.add(process);
            });
            // ignore errors on merged stream (should be handled in individual stream)
            processes.on('error', error => {});
            // show success notification
            processes.pipe(notify({
                title: 'SCSS Fixed',
                message: 'All auto-fixable lint errors have been corrected',
                onLast: true
            }));
        }

    }

    return tasks;

}