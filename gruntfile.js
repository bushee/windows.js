'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-angular-templates');

    var jsSourceFiles = ['src/main.js', 'src/**/*.js'],
        templatesSourceFiles = ['src/templates/**/*.html'];

    grunt.initConfig({
        concat: {
            dist: {
                src: jsSourceFiles,
                dest: 'dist/windows.js'
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                sourceMapIncludeSources: true
            },
            dist: {
                src: jsSourceFiles,
                dest: 'dist/windows.min.js'
            }
        },
        ngtemplates: {
            options: {
                htmlmin: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            },
            dist: {
                options: {
                    module: 'windows.js',
                    url: function (url) {
                        return url.replace(/^src\//, '');
                    }
                },
                src: templatesSourceFiles,
                dest: 'src/templates/templates.js'
            }
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
        },
        watch: {
            options: {
                atBegin: true,
                debounceDelay: 500
            },
            js: {
                files: jsSourceFiles.concat(templatesSourceFiles),
                tasks: ['buildJs']
            },
            less: {
                files: ['less/**/*.less'],
                tasks: ['buildLess']
            }
        }
    });

    grunt.registerTask('buildJs', ['ngtemplates', 'concat', 'uglify']);
    grunt.registerTask('buildLess', ['less']);
    grunt.registerTask('build', ['buildJs', 'buildLess'])
};