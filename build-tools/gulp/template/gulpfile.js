var gulp = require('gulp'), //基础库
    util = require('gulp-util'),
    watchPath = require('gulp-watch-path'),
    sourcemaps = require('gulp-sourcemaps'),
    // imagemin = require('gulp-imagemin'), //图片压缩
    sass = require('gulp-ruby-sass'), //sass
    // minifycss = require('gulp-minify-css'), //css压缩
    autoprefixer = require('gulp-autoprefixer'), //autoprefixer css兼容性补全
    // jshint = require('gulp-jshint'),           //js检查
    uglify = require('gulp-uglify'), //js压缩
    // rename = require('gulp-rename'), //重命名
    // concat = require('gulp-concat'), //合并文件
    combiner = require('stream-combiner2'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });
    //同时开启两个项目时需要同时注销sass任务 否侧出现死循环
    // gulp.watch('share/css/scss/**/*', ['shareSass']);
    gulp.watch('share/**/*', ['share']);
    gulp.watch("css/scss/**/*", ['sass']);
    gulp.watch("**/*.html").on('change', reload);
    gulp.watch("**/*.js").on('change', reload);
});

gulp.task('share',  function() {
    return gulp.src('share/**/*')
        .pipe(gulp.dest('../pcms-web/src/main/webapp/app/share'))
});

gulp.task('sass', function () {
    sass('css/scss/**/*')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css/'))
        .pipe(reload({stream: true}))
});

gulp.task('shareSass', function () {
    sass('share/css/scss/**/*')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('share/css/'))
});

//默认任务
gulp.task('default', ['serve']);