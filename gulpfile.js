var gulp = require('gulp');
// Plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Variables
var paths = {
	admin: {
        src: './assets/stylesheets/admin/*.scss',
        dist: './inc/admin'
    },
    bootstrap: {
        src: './assets/stylesheets/bootstrap-lkwd10s/*.scss',
        dist: './inc/bootstrap/css'
    }
};
var options = {
    autoprefix: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24',
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
        ]
    },
    sass: {
        outputStyle: 'expanded',
        precision: 8
    }
};

// Tasks
// Task: sass:admin
gulp.task('sass:admin', function () {
  return gulp.src(paths.admin.src)
    .pipe(sass(options.sass))
    .pipe(autoprefixer(options.autoprefix))
    .pipe(gulp.dest(paths.admin.dist));
});
// Task: sass:bootstrap
gulp.task('sass:bootstrap', function () {
  return gulp.src(paths.bootstrap.src)
    .pipe(sass(options.sass))
    .pipe(autoprefixer(options.autoprefix))
    .pipe(gulp.dest(paths.bootstrap.dist));
});
// Task: sass
gulp.task('sass', ['sass:admin','sass:bootstrap']);
// Default
gulp.task('default', ['sass']);
