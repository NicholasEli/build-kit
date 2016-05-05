//get gulp node package
var gulp 			= require('gulp'),
	uglify 		= require('gulp-uglify'),
    	uglifycss 	= require('gulp-uglifycss'),
    	autoprefixer 	= require('gulp-autoprefixer'),
	jsonToSass 	= require('gulp-json-to-sass')
   	sass 		= require('gulp-sass'),
	pug 			= require('gulp-pug'),
	babel          = require("gulp-babel");

gulp.task('js', function() {
  	return gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('js/min'));
});

gulp.task('css', function () {
  	gulp.src('css/style.css')
	.pipe(uglifycss())
	.pipe(gulp.dest('css/min'));
});

gulp.task('prefix', function () {
    return gulp.src('css/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

gulp.task('sass', function () {
  gulp.src('css/scss/*.scss')
    .pipe(sass({
        includePaths: ['node_modules/susy/sass']
     }))
	.pipe(jsonToSass({
          jsonPath: 'js/style.json',
          scssPath: 'css/scss/_variables.scss'
     }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

gulp.task('build', function build() {
  return gulp.src('views/pug/*.pug')
    .pipe(gulp.dest('views'));
});

gulp.task("babel", function () {
  return gulp.src("babel/*.js")
    .pipe(babel())
    .pipe(gulp.dest("js"));
});

//set default task
gulp.task('default', function(){

});

// Auto Watch
gulp.task('watch', ['sass', 'babel', 'build'], function () {
	gulp.watch('css/scss/*.scss', ['sass']);
	gulp.watch('views/pug/*.pug', ['build']);
	gulp.watch('babel/*.js', ['babel']);
});
