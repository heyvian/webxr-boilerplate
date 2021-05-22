module.exports = function(dirs, io){

    const helpers = require('./helpers.js')(dirs, io);

    const tasks = {

        utils: require('./tasks/utils.js')(dirs, helpers),
        scss: require('./tasks/scss.js')(dirs, helpers),
        js: require('./tasks/js.js')(dirs, helpers)

    }

    return tasks;

}