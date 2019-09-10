// 载入外挂
var gulp = require('gulp'),
    // sass = require('gulp-ruby-sass'),
    sass = require('gulp-sass'),
    // less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    // minifycss = require('gulp-minify-css'),
    htmlmin = require('gulp-htmlmin'),
    // jshint = require('gulp-jshint'),
    // uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    // rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    // concat = require('gulp-concat'),
    // notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect');

// 样式
gulp.task('build-css', function () {
    return gulp.src(['./src/**/*.scss'])
        // .pipe(less())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(sourcemaps.write({includeContent: false}))
        // .pipe(sourcemaps.write({
        //     includeContent: false
        // }))
        // .pipe(sourcemaps.init({
        //     loadMaps: true
        // }))
        // .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
         .pipe(autoprefixer())
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        // minifycss 不支持 sourcemaps
        // .pipe(minifycss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload())
        // .pipe(notify({
        //     message: 'build-css task complete'
        // }))
        ;
});

// 脚本
gulp.task('build-js', function () {
    return gulp.src(['src/**/*.js'])
        // .pipe(jshint('.jshintrc'))
        // .pipe(jshint.reporter('default'))
        // .pipe(concat('main.js'))
        // .pipe(gulp.dest('dist/js'))
        // .pipe(sourcemaps.init())
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        // .pipe(uglify())
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
        // .pipe(notify({
        //     message: 'build-js task complete'
        // }))
        ;
});

// 图片
gulp.task('build-image', function () {
    return gulp.src(['src/**/*.png'])
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
    // .pipe(notify({
    //     message: 'build-image task complete'
    // }));
});

// html
gulp.task('build-html', function () {
    return gulp.src(['src/**/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
        // .pipe(notify({
        //     message: 'build-html task complete'
        // }))
        ;
});
// 清理
gulp.task('build-clean', function () {
    return gulp.src(['dist'], {
        read: false
    })
        .pipe(clean())
        // .pipe(notify({
        //     message: 'build-clean task complete'
        // }))
        ;
});

// 监视
gulp.task('develop-watch', function () {
    // 监视所有.scss
    gulp.watch('src/**/*.scss', ['build-css']);
    // 监视所有.js
    gulp.watch('src/**/*.js', ['build-js']);
    // 监视所有图片
    gulp.watch('src/**/*.png', ['build-image']);
    // 监视所有html
    gulp.watch('src/**/*.html', ['build-html']);
    // 建立即时重整伺服器
    var server = livereload();
    // 监视所有位在 dist/  目录下的档案，一旦有更动，便进行重整
    gulp.watch(['dist/**']).on('change', function (file) {
        server.changed(file.path);
    });

    // 监视web服务文件
    // gulp.watch(['dist/*.html', 'dist/**/*.css', 'dist/**/*.js'], ['develop-pageReload']);
});

// 启用一个web服务
gulp.task('develop-server', function () {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

// gulp.task('develop-pageReload', function () {
//     gulp.src(['dist/*.html'])
//         .pipe(connect.reload())
//         .pipe(notify({
//             message: 'develop-reload task complete'
//         }));
// });

// 创建dist
gulp.task('build', ['build-clean'], function () {
    gulp.start('build-css', 'build-js', 'build-image', 'build-html');
});

// 开发使用
gulp.task('develop', ['build-clean'], function () {
    gulp.start('build', 'develop-server', 'develop-watch');
});

// ------
// // 测试gulp-connect
// gulp.task('html', function () {
//     gulp.src('src/*.html')
//         .pipe(gulp.dest('dist'))
//         .pipe(connect.reload());
// });

// // 定义livereload任务
// gulp.task('connect', function () {
//     connect.server({
//         root: 'dist',
//         livereload: true
//     });
// });

// // 定义看守任务
// gulp.task('watch', function () {
//     gulp.watch('src/*.html', ['html']);
// });

// // 定义默认任务
// gulp.task('default', ['html', 'watch', 'connect']);
// ------
