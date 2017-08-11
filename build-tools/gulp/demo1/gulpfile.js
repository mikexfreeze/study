var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-ruby-sass');

// gulp.task('default', function() {
//   // 将你的默认的任务代码放在这
// });

// 压缩 JavaScript 文件
gulp.task('script', function() {
    // 1. 找到
    gulp.src('js/*.js')
    // 2. 压缩
        .pipe(uglify())
    // 3. 另存
        .pipe(gulp.dest('dist/js'));

    // 监听文件修改，当文件被修改则执行 script 任务
});

// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task('css', function () {
    // 1. 找到文件
    gulp.src('css/*.css')
    // 2. 压缩文件
        .pipe(minifyCSS())
        // 3. 另存为压缩文件
        .pipe(gulp.dest('dist/css'))
});

// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task('images', function () {
    // 1. 找到图片
    gulp.src('images/*.*')
    // 2. 压缩图片
        .pipe(imagemin({
            progressive: true
        }))
        // 3. 另存图片
        .pipe(gulp.dest('dist/images'))
});

// 编译sass
// 在命令行输入 gulp sass 启动此任务
gulp.task('sass', () =>
sass('sass/main.scss',{
    style: 'expanded',
})
    .on('error', sass.logError)
    .pipe(gulp.dest('result'))
);

gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    // gulp.watch('js/*.js', ['script']);
    // 监听文件修改，当文件被修改则执行 css 任务
    // gulp.watch('css/*.css', ['css']);
    // 监听文件修改，当文件被修改则执行 images 任务
    // gulp.watch('images/*.*)', ['images']);
    // 监听文件修改，当文件被修改则执行 images 任务
    gulp.watch('sass/**/*.scss', ['sass'])
});

gulp.task('default', ['sass', 'auto']);