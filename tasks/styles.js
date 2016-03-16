var config = require('./config.js');
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('css', function() {
	return gulp.src("./src/less/*.less")
		.pipe(less())
		.pipe(gulp.dest('dist/css/'))
})
