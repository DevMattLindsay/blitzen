/**
 * Gulp configuration file
 */

// basic paths

var scss_src = './scss';
var main_css = './stylesheet';

module.exports = {

	// Task: compile SASS files (and concat with CSS files)
	// Plugin: gulp-sass (https://github.com/dlmanning/gulp-sass)
	sass: {
		src: {
			main: scss_src + '/main.scss'
		},
		watch : {
			all: scss_src + '/**/*'
		},
		dest: {
			main: main_css + '/min'
		},
		dest_file: {
			main: 'main.min.css'
		},
		clean_css: {
			advanced: true,	// set "false" for faster operation, but slightly larger output files
			keepSpecialComments: 0
		},
		options: {
			outputStyle: 'compressed'
		}
	}

};
