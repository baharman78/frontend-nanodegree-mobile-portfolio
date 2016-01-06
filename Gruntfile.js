'use strict';

module.exports = function(grunt) {

    // https://github.com/sindresorhus/load-grunt-tasks
    require('load-grunt-tasks')(grunt);

    // http://gruntjs.com/configuring-tasks#grunt-configuration
    grunt.initConfig({

        /* https://www.npmjs.com/package/grunt-contrib-jshint */
        /* http://jshint.com/docs/options/ */
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
            },

            user: ['src/js/**/*.js', 'src/views/js/**/*.js'],

            gruntfile: {
                options: {
                    node: true
                },
                files: {
                    src: ['Gruntfile.js']
                }
            }
        },

        /* https://www.npmjs.com/package/grunt-contrib-imagemin */
        imagemin: {
            dist: {
              files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{jpg,gif,svg,jpeg,png}'],
                    dest: 'dist/img/'
                }]
            },
            distview: {
              files: [{
                expand: true,
                cwd: 'src/views/images/',
                src: ['**/*.{gif,svg,jpeg,png}'],
                dest: 'dist/views/images/'
              }]
            }
        },

        // https://www.npmjs.com/package/grunt-contrib-cssmin

        cssmin: {
          dist: {
            files: [{
              expand: true,
              cwd: 'src/css',
              src: ['*.css', '!*.min.css'],
              dest: 'dist/css',
              ext: '.css'
            }]
          },
          distview: {
            files: [{
              expand: true,
              cwd: 'src/views/css',
              src: ['*.css', '!*.min.css'],
              dest: 'dist/views/css',
              ext: '.css'
            }]
          }
        },

        /* https://www.npmjs.com/package/grunt-contrib-uglify */
        uglify: {
          options: {
            mangle: {
              except: ['jQuery']
            },
            beautify: true
          },
          dist: {
            files: [{
              expand: true,
              cwd: 'src/js',
              src: '**/*.js',
              dest: 'dist/js'
            }]
          },
          distview: {
            files: [{
              expand: true,
              cwd: 'src/views/js',
              src: '**/*.js',
              dest: 'dist/views/js'
            }]
          }
        },

        // https://www.npmjs.com/package/grunt-contrib-clean
        clean: {
            dist: {
                src: ['dist/']
            },
        },

        // https://www.npmjs.com/package/grunt-contrib-copy
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd:'src/',
                    src: ['**/*.html',
                          '**/*.md',
                          'views/images/pizzeria.jpg',
                          'views/**/*.html'
                    ],
                    dest: 'dist/'
                }]
            }
        },

        // https://www.npmjs.com/package/grunt-contrib-watch
        watch: {
            livereload: {
                files: ['app/**/*.html',
                        'app/js/**/*.js',
                        'app/css/**/*.css',
                        'app/images/**/*.{jpg,gif,svg,jpeg,png}'
                ],
                options: {
                    livereload: true
                }
            },

            responsive_images: {
                files: ['images_src/*.{gif,jpg,png}'],
                tasks: ['responsive-img']
            }
        },

        // https://www.npmjs.com/package/grunt-contrib-connect
        connect: {
            src: {
                options: {
                    port: 9000,
                    base: 'src',
                    open: true,
                    livereload: true,
                    hostname: '127.0.0.1'
                }
            },

            dist: {
                options: {
                    port: 9001,
                    base: 'dist',
                    open: true,
                    keepalive: true,
                    livereload: false,
                    hostname: '127.0.0.1'
                }
            }
        }
    });

// Tasks to run

    // default task   > grunt
    grunt.registerTask('default', ['connect:src', 'watch']);

    // lint js    > grunt validate-js
    grunt.registerTask('validate-js', ['jshint']);

    //publish finished site to /dist directory  > grunt publish
    grunt.registerTask('publish', ['clean:dist', 'validate-js', 'copy:dist', 'imagemin', 'uglify', 'cssmin', 'connect:dist']);

};
