var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	uglify = require('gulp-uglify');
gulp.task('default', function() {
return browserify('./js/main.js') 
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./js'))
});
gulp.task('minify', function () {
    gulp.src('./js/bundle.js')
        .pipe(uglify())
        .pipe(gulp.dest('/'));
});