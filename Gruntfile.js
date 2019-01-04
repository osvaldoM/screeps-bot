const config = require('./.screeps.json');

module.exports = function (grunt) {
    const branch = grunt.option('branch') || config.branch;
    const email = grunt.option('email') || config.email;
    const password = grunt.option('password') || config.password;
    const ptr = grunt.option('ptr') ? true : config.ptr;

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email,
                password,
                branch,
                ptr,
            },
            dist: {
                src: ['src/*.js'],
            },
        },
    });
};
