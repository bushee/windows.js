'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    var sourceFiles = ['src/main.js', 'src/**/*.js'];

    grunt.initConfig({
        concat: {
            dist: {
                src: sourceFiles,
                dest: 'dist/windows.js'
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                sourceMapIncludeSources: true
            },
            dist: {
                src: sourceFiles,
                dest: 'dist/windows.min.js'
            }
        },
        watch: {
            options: {
                atBegin: true,
                debounceDelay: 500
            },
            files: sourceFiles,
            tasks: ['build']
        },
        less: {
            options: {
                compress: true,
                strictMath: true,
                strictUnits: true,
                sourceMap: true,
                sourceMapBasepath: 'dist'
            },
            dist: {
                options: {
                    sourceMapFilename: 'dist/windows.css.map'
                },
                src: 'less/index.less',
                dest: 'dist/windows.css'
            }
        }
    });

    grunt.registerTask('build', ['concat', 'uglify', 'less'])
};