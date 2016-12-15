var gulp = require('gulp');
var uncss = require('gulp-uncss');
gulp.task('default', function() {
    return gulp.src('node_modules/bootstrap/dist/css/bootstrap.css')
        .pipe(uncss({
            html: ['./index.html']
        }))
        .pipe(gulp.dest('css/'));
});