var gulp    = require('gulp'),
minifycss   = require('gulp-minify-css'),
uglify      = require('gulp-uglify'),
imagemin    = require('gulp-imagemin'),
concat      = require('gulp-concat'),
del         = require('del'),
livereload  = require('gulp-livereload'),
autoprefix  = require('gulp-autoprefixer');

//Styles tasks
gulp.task('styles', function() {
  gulp.src('src/css/*.css')
  .pipe(minifycss())
  .pipe(concat('main.css'))
  .pipe(autoprefix())
  .pipe(gulp.dest('build/css/'))
  .pipe(livereload());
});

//Scripts tasks
gulp.task('scripts', function() {
  gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(concat('main.js'))
  .pipe(gulp.dest('build/js/'))
  .pipe(livereload());
});

//Images tasks
gulp.task('img', function() {
  gulp.src('src/img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('build/img/'))
  .pipe(livereload());
});

//Clean files
gulp.task('clean', function(cb) {
  del(['build/css', 'build/js', 'build/img'], cb)
});

//Watch task
gulp.task('watch', function() {
  var server = livereload();
  gulp.watch('src/css/*.css', ['styles']);
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/img/*', ['img']);
});

//Default task
gulp.task('default', ['clean', 'styles', 'scripts', 'img', 'watch']);