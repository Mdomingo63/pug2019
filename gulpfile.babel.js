//Constantes para el automatizador de tareas
const gulp = require("gulp");
const pug = require('gulp-pug');
const sass = require('gulp-sass')
const plumber = require("gulp-plumber");
const autoprefixer = require('gulp-autoprefixer');

const browserSync = require('browser-sync')

const server = browserSync.create()

gulp.task('pug', () => {
  return gulp.src('./dev/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./public/'))
})

gulp.task('sass', () => {
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/'))
})


gulp.task('default', () => {
  server.init({
    server: './public'
  })

  //PUG
  gulp.watch('./dev/**/*.pug', gulp.series('pug')).on('change', server.reload)

  // SASS

  gulp.watch('./dev/**/*.pug', gulp.series('pug'))
})