module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        concat: {
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/windows.js'
            }
        }
    });

    grunt.registerTask('build', ['concat'])
};