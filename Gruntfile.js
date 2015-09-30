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
                options: {
                    datasvgcss: 'social-icons.data.svg.css',
                    datapngcss: 'social-icons.data.png.css',
                    urlpngcss: 'social-icons.fallback.css',
                    cssprefix: '.social-icon--'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-grunticon');

    grunt.registerTask('default', ['clean', 'svgmin', 'grunticon:myIcons']);
};
