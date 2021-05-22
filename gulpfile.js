const gulp = require('gulp');

//----------------------------------------------------------------------------------//
//                                                                                  //
//  Directory Configuration                                                         //
//                                                                                  //
//  Set up shortcut variables for any directories you might need to work with       //
//  Then, populate the `io` variable with paths you want for each task              //
//                                                                                  //
//----------------------------------------------------------------------------------//

const dirs = {
    nodeModules: __dirname + '/node_modules',
    src: __dirname + '/src',
    dist: __dirname + '/dist',
};

const io = {
    'scss': [
        {
            input: dirs.src + '/scss/**/*.scss',
            output: dirs.dist + '/css'
        }
    ],
    'js-transpile': [
        {
            input: [dirs.src + '/js/*.js'],
            output: dirs.dist + '/js',
            watch: [
                dirs.src + '/js/*.js',
            ]
        }
    ],
};


//----------------------------------------------------------------------------------//
//                                                                                  //
//  Tasks                                                                           //
//                                                                                  //
//----------------------------------------------------------------------------------//

const tasks = require('./gulp/tasks.js')(dirs, io);

gulp.task('default', () => {
    tasks.scss.default();
    tasks.js.default();
});

gulp.task('watch', () => {
    tasks.scss.watch();
    tasks.js.watch();
});

gulp.task('scss', () => tasks.scss.default());
gulp.task('scss-watch', () => tasks.scss.watch());
gulp.task('scss-compile', () => tasks.scss.compile());
gulp.task('scss-lint', () => tasks.scss.lint());

gulp.task('js', () => tasks.js.default());
gulp.task('js-watch', () => tasks.js.watch());
gulp.task('js-transpile', () => tasks.js.transpile());