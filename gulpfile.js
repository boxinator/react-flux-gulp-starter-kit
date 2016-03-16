var gulp = require('gulp');
var config = require('./tasks/config.js');

var requireDir = require('require-dir');
var tasks = requireDir('./tasks');

gulp.task('dev', ['js', 'css', 'webserver:dev', 'watch']);
