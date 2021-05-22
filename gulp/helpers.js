module.exports = function(dirs, io){

    const fs = require('fs');
    const notify = require('gulp-notify');

    const helpers = {

        getPaths: function(groups){
            let paths = [];
            if(!Array.isArray(groups)){
                groups = [groups];
            }
            groups.forEach(group => {
                if(!(group in io)){
                    return;
                }

                for(let i = 0; i < io[group].length; i++){
                    const directory = io[group][i];
                    // set up variables
                    let input = undefined;
                    let output = undefined;
                    if(typeof directory === 'string'){
                        input = directory;
                        output = directory;
                    } else if(typeof directory === 'object'){
                        input = directory.input;
                        output = (directory.output) ? directory.output : directory.input;
                    }
                    paths.push({
                        input: input,
                        output: output,
                        watch: directory.watch || null
                    });
                }
            });
            return paths;
        },

        getMergedInputs: function(tasks){
            const inputs = this.getPaths(tasks).map(path => path.watch || path.input);
            let merged = [];
            inputs.forEach(input => {
                merged = merged.concat(input);
            });
            return merged;
        },

        notifyError: function(obj, severity, message){
            if(severity === undefined)
                severity = 'error';
            if(message === undefined)
                message = 'Check the console for details';

            let options = {
                message: message
            };

            if(severity === 'error'){
                options.title = 'Error';
                options.sound = 'Hero';
            } else if(severity === 'warning'){
                options.title = 'Warning';
                options.sound = false;
                options.icon = __dirname + '/gulp-warning.png';
            }

            notify(options).write(obj);

            if(severity === 'error'){
                if(this.emit){
                    this.emit('end');
                }
            }
        }

    }

    return helpers;

}