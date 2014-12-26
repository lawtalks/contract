var gulp        = require('gulp'),
    clean       = require('gulp-clean'),
    watch       = require('gulp-watch'),
    jade        = require('gulp-jade'),
    sass        = require('gulp-sass');

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];


gulp.task('default', ['fonts', 'css', 'js', 'jade'], function () { 

    gulp.watch('./app/stylesheets/*.scss', ['sass']);
    gulp.watch('./app/stylesheets/*.css', ['css']);
    gulp.watch('./app/javascripts/*.js', ['js']);
    gulp.watch('./app/index.jade', ['jade']);
});

gulp.task('sass', function () {
    return gulp.src([
      './app/stylesheets/*.scss',
      './app/stylesheets/**/*.css',
      './app/stylesheets/components/components.scss'
    ])
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js', function () {
    gulp.src('./bower_components/zepto/zepto.min.js')
      .pipe(gulp.dest('./dist/javascripts/'));
    gulp.src('./bower_components/jquery/dist/jquery.min.js')
      .pipe(gulp.dest('./dist/javascripts/'));
    gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('./dist/javascripts/'));
    gulp.src('./bower_components/mustache/mustache.js')
        .pipe(gulp.dest('./dist/javascripts/'));
    gulp.src('./app/javascripts/*.js')
        .pipe(gulp.dest('./dist/javascripts/'));
})

gulp.task('fonts', function () {
    gulp.src('./bower_components/bootstrap/fonts/*')
        .pipe(gulp.dest('./dist/fonts/'));
    gulp.src('./bower_components/fontawesome/fonts/*')
        .pipe(gulp.dest('./dist/fonts/'));
})


gulp.task('css', function () {
    gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('./dist/stylesheets/'));
    gulp.src('./bower_components/bootstrap/dist/css/bootstrap-theme.min.css')
        .pipe(gulp.dest('./dist/stylesheets/'));
    gulp.src('./bower_components/fontawesome/css/font-awesome.min.css')
        .pipe(gulp.dest('./dist/stylesheets/'));
    gulp.src('./app/stylesheets/*.css')
        .pipe(gulp.dest('./dist/stylesheets/'));
})

gulp.task('jade', function () {
    gulp.src('./app/index.jade')
      .pipe(jade({
        locals: {}
      }))
      .pipe(gulp.dest('./dist/'));
});


gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
})










