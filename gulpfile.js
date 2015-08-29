var gulp        = require('gulp')
var jade        = require('gulp-jade');
var browserSync = require('browser-sync');

gulp.task('templates', function() {
  gulp.src('./src/jade/*.jade')
    .pipe(jade({
      locals: {},
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('copy', function () {
  gulp.src('./src/css/style.css')
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('serve', [
  'templates',
  'copy'
  ], function() {
  browserSync({
    server: {
      baseDir: 'dist/'
    }
  });
  gulp.watch(['src/jade/**/*.jade'], ['templates']);
  gulp.watch(['./src/css/style.css'], ['copy']);
});