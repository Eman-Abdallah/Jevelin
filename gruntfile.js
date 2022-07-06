module.exports = function(grunt) {
    const sass = require('node-sass');
    // configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            build: {
                files: {
                    './assets/css/style.css': 'style.scss'
                }
            }
        },

        concat: {
            js: {
                src: ['themes/js/*.js',
                    "./node_modules/bootstrap/dist/js/bootstrap.js",
                    "./node_modules/jquery/dist/jquery.min.js",
                    "./node_modules/swiper/swiper-bundle.min.js",


                ],
                dest: 'assets/js/script.js'
            },
        },
        watch: {
            Grunt: {
                files: ["**/*.scss", "./Gruntfile.js"],
                options: { reload: true },
                tasks: ["sass", "concat"],
            },
        },
    });

    // load plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');







}