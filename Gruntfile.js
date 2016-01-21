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

        /* https://www.npmjs.com/package/grunt-contrib-htmlmin */

        htmlmin: {                                                                           // Target
          options: {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
          },
          dist: {
            files: {
            'dist/index.html': 'dist/index.html',
            'dist/project-2048.min.html': 'dist/project-2048.min.html',
            'dist/project-mobile.min.html': 'dist/project-mobile.min.html',
            'dist/project-webperf.min.html': 'dist/project-webperf.min.html'
            }
          },
          distview: {
            files: {
                'dist/views/pizza.min.html': 'dist/views/pizza.min.html'
            }
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
              ext: '.min.css'
            }]
          },
          distview: {
            files: [{
              expand: true,
              cwd: 'src/views/css',
              src: ['*.css', '!*.min.css', '!bootstrap-grid.css'],
              dest: 'dist/views/css',
              ext: '.min.css'
            }]
          }
        },

        /* https://www.npmjs.com/package/grunt-contrib-uglify */
        uglify: {
          options: {
            beautify: false
          },
          dist: {
            files: {
              'dist/js/perfmatters.min.js' : ['src/js/perfmatters.js']
            }
          },
          distview: {
            files: {
              'dist/views/js/main.min.js' : ['src/views/js/main.js']
            }
          }
        },

        /* https://www.npmjs.com/package/grunt-processhtml-prepend */

        processhtml: {
          dist: {
            files: {
            'dist/index.html': 'src/index.html',
            'dist/project-2048.min.html': 'src/project-2048.html',
            'dist/project-mobile.min.html': 'src/project-mobile.html',
            'dist/project-webperf.min.html': 'src/project-webperf.html'
            }
          },
          distview: {
            files: {
                'dist/views/pizza.min.html': 'src/views/pizza.html'
            }
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
                    src: ['**/*.md',
                          'views/images/pizzeria.jpg',
                          'views/css/bootstrap-grid.css'
                    ],
                    dest: 'dist/'
                }]
            }
        },

        // https://www.npmjs.com/package/grunt-contrib-watch
        watch: {
            livereload: {
                files: ['src/**/*.html',
                        'src/js/**/*.js',
                        'src/css/**/*.css',
                        'src/images/**/*.{jpg,gif,svg,jpeg,png}'
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
        },

        /* https://www.npmjs.com/package/grunt-gh-pages */

        'gh-pages': {
          options: {
            add: false
          },
          dist: {
            options: {
              base: 'dist',
              message: 'Generated distribution copy by grunt gh-pages'
            },
              src: ['**/*']
          },
          src: {
            options: {
              base: 'src',
              message: 'Generated application copy by grunt gh-pages'
            },
              src: ['**/*']
          }
        },

        /* https://www.npmjs.com/package/grunt-pagespeed */

        pagespeed: {
          options: {
            nokey: true,
            url: "http://baharman78.github.io" // base url
          },
          desktop: {
            options: {
              paths: ["/frontend-nanodegree-mobile-portfolio/", "/frontend-nanodegree-mobile-portfolio/views/pizza.min.html"], // adds following extentions on base url
              locale: "en_GB",
              strategy: "desktop",
              threshold: 90
            }
          },
          mobile: {
            options: {
              paths: ["/frontend-nanodegree-mobile-portfolio/", "/frontend-nanodegree-mobile-portfolio/views/pizza.min.html"], // adds following extentions on base url
              locale: "en_GB",
              strategy: "mobile",
              threshold: 90
            }
          }
        }

    });

// Tasks to run

    // default task   > grunt
    grunt.registerTask('default', ['connect:src', 'watch']);

    // create gh-pages node using src directory
    grunt.registerTask('test', ['gh-pages:src']);

    // create gh-pages node using dist directory
    grunt.registerTask('deploy', ['gh-pages:dist']);

    // lint js    > grunt validate-js
    grunt.registerTask('validate-js', ['jshint']);

    // minify all html, css, js, and image files
    grunt.registerTask('minify', ['imagemin', 'cssmin', 'uglify', 'processhtml', 'htmlmin']);

    // runs pagespeed insights on specific websites using desktop configuration
    grunt.registerTask('pageinsights', ['pagespeed:desktop']);

    // runs pagespeed insights on specific websites using mobile configuration
    grunt.registerTask('pageinsightsm', ['pagespeed:mobile']);

    //publish finished site to /dist directory  > grunt publish
    grunt.registerTask('publish', ['clean:dist', 'validate-js', 'copy:dist', 'minify', 'connect:dist']);

};
