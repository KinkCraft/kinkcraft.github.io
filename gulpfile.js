// include gulp
var gulp = require('gulp'); 

// include plug-ins
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var minifyCSS = require('gulp-minify-css');
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('build-clean', function() {
  return del(['./assets/js/site*.js','./assets/css/site-min.css'])
});

gulp.task('build-scripts', function() {
  return gulp.src('./assets/js/*.js')
    .pipe(concat('site.js'))
    .pipe(minify())
    .pipe(gulp.dest('./assets/js'))
});

gulp.task('build-styles', function() {
  return gulp.src('./assets/css/*.css')
    .pipe(concat('site-min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./assets/css'))
});

gulp.task('build', function(callback) {
  runSequence('build-clean',
              ['build-scripts', 'build-styles'],
              callback);
});