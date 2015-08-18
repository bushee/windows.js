module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        concat: {
            dist: {
                src: ['src/**/*.js'],
                dest: 'bin/windows.js'
            }
        }
    });

    grunt.registerTask('build', ['concat'])
};