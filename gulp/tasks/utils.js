module.exports = function(dirs, helpers){

    const gulp = require('gulp');
    const mergeStream = require('merge-stream');
    const notify = require('gulp-notify');

    const tasks = {

        copy: function(){
            const paths = helpers.getPaths(['util-copy']);
            const processes = mergeStream();

            paths.forEach(path => {
                let process = gulp.src(path.input)
                    .pipe(gulp.dest(path.output))
                    .pipe(notify({
                        title: 'File Copied',
                        message: '<%= file.relative %>'
                    }));

                processes.add(process);
            });
            // ignore errors on merged stream (should be handled in individual stream)
            processes.on('error', error => {});
            // show success notification
            processes.pipe(notify({
                title: 'Copying Complete',
                message: 'All files copied',
                onLast: true
            }));
        }

    }

    return tasks;

}