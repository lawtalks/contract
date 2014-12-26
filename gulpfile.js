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


gulp.task('default', ['sass', 'js', 'jade'], function () { 
  
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
    return gulp.src('./app/javascripts/*.js')
        .pipe(gulp.dest('./dist/js/'));
})

gulp.task('jade', function () {
    return gulp.src('./app/index.jade')
        .pipe(jade({
          locals: {}
        }))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function () {
    gulp.watch('./app/stylesheets/*.scss', ['sass']);
    gulp.watch('./app/javascripts/*.js', ['js']);
    gulp.watch('./app/index.jade', ['jade']);
})

gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
})










