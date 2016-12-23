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
