var config = require('./config')
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');

gulp.task('js', function() {
	return browserify('./src/js/main.js')
		.transform(babelify, {presets: ['react']})
		.bundle()
		.pipe(source('compiled.js'))
		.pipe(gulp.dest('dist/js/'))
		.pipe(livereload());
})
