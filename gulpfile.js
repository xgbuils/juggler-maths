var gulp        = require('gulp')
var jade        = require('gulp-jade');
var browserSync = require('browser-sync');

gulp.task('templates', function() {
  gulp.src('./src/jade/*.jade')
    .pipe(jade({
      locals: {}
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('serve', [
  'templates',
  ], function() {
  browserSync({
    server: {
      baseDir: 'dist/'
    }
  });
  gulp.watch(['src/jade/**/*.jade'], ['templates']);
});