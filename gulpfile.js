const gulp = require('gulp')
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const minifyCss = require('gulp-csso')
const browserify = require('gulp-browserify')

gulp.task('style', function () {
  return gulp.src('src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
      browsers: ['last 15 versions']
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('./public/css'))
})

gulp.task('scripts', function () {
  gulp.src(['./src/js/main.js'])
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.sass', ['style'])
  gulp.watch('src/js/**/*.js', ['scripts'])
})

gulp.task('build', ['style', 'scripts'], function () {
})

gulp.task('default', ['watch'])
