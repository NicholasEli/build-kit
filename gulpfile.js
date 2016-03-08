//get gulp node package
var gulp 			 	 = require('gulp'),
	uglify 			 	 = require('gulp-uglify'),
	uglifycss 	 	 = require('gulp-uglifycss'),
	autoprefixer 	 = require('gulp-autoprefixer'),
	sass 			   	 = require('gulp-sass'),
  sourcemaps     = require('gulp-sourcemaps'),
  livereload     = require('gulp-livereload');

// Minify JS for Production
gulp.task('js', function() {
  	return gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('js/min'));
});

// Minify CSS for Production
gulp.task('css', function () {
    gulp.src('css/style.css')
  .pipe(uglifycss())
  .pipe(gulp.dest('css/min'));
});

// Changes to Javascript files- DO SOMETHING
gulp.task('js-watch', function() {
    return gulp.src('js/*.js')
    // Livereload
    .pipe(livereload());
});

// Changes to static files- DO SOMETHING
gulp.task('static-watch', function() {
    return gulp.src(['*.html', '*.php'])
    // Livereload
    .pipe(livereload());
});

// Browser Prefixes for lazy coding
gulp.task('prefix', function () {
    return gulp.src('css/style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

// Watch for changes to sass files
gulp.task('sass', function () {
  gulp.src('css/scss/*.scss')
    // Sourcemaps for Chrome Browser Debuging
    .pipe(sourcemaps.init())
    .pipe(sass({
        // Quick relative paths for extra Sass libraries like Susy
        // includePaths: require('node-normalize-scss').with('node_modules/breakpoint-sass/stylesheets', 'node_modules/susy/sass')
        includePaths: ['node_modules/susy/sass']
     }))
    // Compile Sass into CSS with Gulp LibSass
    .pipe(sass().on('error', sass.logError))
    // Make it easy to read
    .pipe(sass({outputStyle: 'expanded'}))
    // Add Vendor Prefizxes for CSS3 styles
    .pipe(autoprefixer())
    // Writes sourcemaps into the CSS file
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('css'))
    // Livereload
    .pipe(livereload());
});


//set default task
gulp.task('default', function(){

});

// Auto Watch
gulp.task('watch', ['sass'], function () {
   gulp.watch('css/scss/*.scss', ['sass']);
});

// Let Gulp know what to Watch
gulp.task('watch', ['sass', 'js-watch', 'static-watch'], function () {
   livereload.listen();
   gulp.watch('css/scss/*.scss', ['sass']);
   gulp.watch('js/*.js', ['js-watch']);
   gulp.watch(['*.html', '*.php'], ['static-watch']);
});
