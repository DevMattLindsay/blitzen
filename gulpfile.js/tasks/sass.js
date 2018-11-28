var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	config = require('../config').sass,
	config_cssmin = require('../config').cssmin;

gulp.task('sass:main', function() {
	return gulp.src(config.src.main)
		.pipe(sass(config.options).on('error', sass.logError))
		.pipe(cleanCSS(config.clean_css))
		.pipe(concat(config.dest_file.main))
		.pipe(gulp.dest(config.dest.main));
});

gulp.task('sass', ['sass:main']);
