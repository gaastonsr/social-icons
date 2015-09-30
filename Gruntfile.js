'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['tmp', 'build'],

        svgmin: {
            options: {
                plugins: [
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false },
                    { removeXMLProcInst: false }
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'svg-icons',
                    src: ['*.svg'],
                    dest: 'tmp/compressed-svg-icons'
                }]
            }
        },
        grunticon: {
            myIcons: {
                files: [{
                    expand: true,
                    cwd: 'tmp/compressed-svg-icons',
                    src: ['*.svg'],
                    dest: 'build'
                }],
                options: {}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-grunticon');

    grunt.registerTask('default', ['clean', 'svgmin', 'grunticon:myIcons']);
};
