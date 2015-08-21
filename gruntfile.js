module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

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
        }
    });

    grunt.registerTask('build', ['concat', 'uglify'])
};