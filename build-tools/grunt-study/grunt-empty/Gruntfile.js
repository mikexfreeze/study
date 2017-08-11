module.exports = function(grunt) {
    // 使用严格模式
    'use strict';

    var config = {
        app: 'app',
        dist: 'dist'
    };
    // 这里定义我们需要的任务
    grunt.initConfig({
        config: config,

        copy:{
            dist_html:{
                files:[{
                    expand: true,
                    cwd: '<%= config.app %>/',
                    src: '**/*.js',
                    dest: '<%= config.dist %>/',
                    ext: '.js',
                    extDot: 'first',
                    flatten: true,
                    rename: function (dest, src) {
                        return dest + 'js/' + src;
                    },
                }]


                // files:{
                    // '<%= config.dist %>/index.html' : '<%= config.app %>/index.html',
                    // '<%= config.dist %>/js/index.js' : ['<%= config.app %>/js/index.js']
                // }
            }

        },

        clean: {
            dist: {
                src: ['<%= config.dist %>/**/*'],

                // filter: 'isFile'
                filter: function (filepath) {
                    console.log(filepath);
                    return (!grunt.file.isDir(filepath));
                },
                // dot: false,
                // matchBase: true, /*a?b !/xyz/123/acb /xyz/acb/123*/
                expand: true,
            }
        }
    });

    // 一定要引用着3个模块
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('load-grunt-tasks');
    // grunt.loadNpmTasks('time-grunt');
    // 把需要跑的任务注册到default这里每次运行grunt的时候先删除dist，然后重新编译，最后监测文件夹的情况。
    grunt.registerTask('default', ['clean:dist', 'sass:dist', 'watch:scripts']);
};