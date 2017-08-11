module.exports = function (grunt) {
    // 使用严格模式
    'use strict';

    var config = {
      pojectName: 'test-project-01'
    };
    // 这里定义我们需要的任务
    grunt.initConfig({
        config : config,
        // 设置任务，删除文件夹
        clean: {
            dist: 'dist'
        },


        // 通过sass编译成css文件
        sass: {
            dist: {
                options: {                       // 任务配置
                    style: 'expanded'
                },

                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },

        autoprefixer: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css'],
                    dest: 'css',
                    ext: '.css'
                }]

            }
        },

        // 检测改变，自动跑sass任务
        watch: {
            css: {
                files: 'scss/*.scss',
                tasks: ['sass', 'autoprefixer']
            }
        },

        copy: {
            dist_html:{
                files: [
                    {
                        expand: true,
                        // cwd: '/',
                        src: ['**/*','!**/scss/**','!**/node_modules/**','!Gruntfile.js','!package.json'],
                        dest: '../test-copy-project/',
                        dot: false,
                    }
                ]
            }

        }



    });

    // 一定要引用着3个模块
    require('load-grunt-tasks')(grunt);
    // grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-autoprefixer');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // 把需要跑的任务注册到default这里每次运行grunt的时候先删除dist，然后重新编译，最后监测文件夹的情况。
    grunt.registerTask('default', [ 'watch']);
};