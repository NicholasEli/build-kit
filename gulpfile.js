//get gulp node package
var gulp 			 	= require('gulp'),
	uglify 			 	= require('gulp-uglify'),
	uglifycss 	 		= require('gulp-uglifycss'),
	autoprefixer 		= require('gulp-autoprefixer'),
	sass 			   	= require('gulp-sass');

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
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});


//set default task
gulp.task('default', function(){

});

// Auto Watch
gulp.task('watch', ['sass'], function () {
   gulp.watch('css/scss/*.scss', ['sass']);
});