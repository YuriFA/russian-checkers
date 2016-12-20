const gulp = require('gulp')
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const minifyCss = require('gulp-csso')
const gutil = require('gulp-util')
const babel = require('gulp-babel')
const browserify = require('gulp-browserify')

gulp.task('style', function () {
  return gulp.src('src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
      browsers: ['last 15 versions']
    }))
    .pipe(gulp.dest('src/css'))
})

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.sass', ['style'])
  gulp.watch('src/js/**/*.js', ['build'])
})

gulp.task('build', ['style'], function () {
  // css
  gulp.src(['./src/css/**/*.css'])
    .pipe(minifyCss())
    .pipe(gulp.dest('./public/css'))

  // js
  gulp.src(['./src/js/main.js'])
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(gulp.dest('./public/js'))

  // html
  gulp.src('src/*.html')
    .pipe(gulp.dest('public'))
})

gulp.task('default', ['watch'])
