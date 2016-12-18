var gulp = require('gulp');
var uncss = require('gulp-uncss');
var uncss = require('gulp-scss');
var theme = 'paper';
/*gulp.task('default', function() {
    return gulp.src('node_modules/bootswatch/'+theme+'/bootstrap.scss')
        .pipe(uncss({
            html: ['./index.html']
        }))
        .pipe(gulp.dest('css/'));
});*/
gulp.task('scss', function () {
 gulp.src('node_modules/bootswatch/'+theme+'/bootstrap.scss')
   .pipe(gulp.dest('css/'));
});