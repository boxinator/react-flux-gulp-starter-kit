var config = require('./config.js');
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var livereload = require('gulp-livereload');

gulp.task('webserver:dev', function() {
	gulp.src('./')
		.pipe(webserver({
			livereload: true,
			open: true
		}));
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(config.js, ['js']);
	gulp.watch(config.less, ['css']);
})
