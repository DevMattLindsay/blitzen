var gulp = require('gulp'),
	watch = require('gulp-watch'),
	config = require('../config');

gulp.task('watch', function() {

	// Watch All SASS
	gulp.watch(config.sass.watch.all, ['sass:main']);

});
