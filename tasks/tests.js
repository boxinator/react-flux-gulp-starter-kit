var gulp = require('gulp');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');

gulp.task('test', function() {

	var tests = gulp.src(config.tests, {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha({compilers:{js:babel}}));
	return tests;
});
