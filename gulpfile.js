const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const nano = require('cssnano');
const prefix = require('autoprefixer');
const minify = require("gulp-minify");
const imagemin = require("gulp-imagemin");

function compile() {
  // Where should gulp look for the sass files?
  // My .sass files are stored in the styles folder
  // (If you want to use scss files, simply look for *.scss files instead)
  return (
    gulp
      .src("sass/**/*.scss")

      // Use sass with the files found, and log any errors
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(postcss([prefix(), nano()]))

      // What is the destination for the compiled file?
      .pipe(gulp.dest("public/css"))
  );
}

function squashImages() {
  gulp.src('public/images/**')
    .pipe(imagemin())
    .pipe(gulp.dest('public/images'))
}

// todo => change this function so we can pipe a minified JS file to the right spot. Maybe set up a src instead?

function compress(done) {
    gulp.src("public/js/*.js")
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))

    done()
}

function watch() {
  gulp.watch("sass/**/*.scss", compile);
  gulp.watch("public/images/**", squashImages);
  //gulp.watch("public/js/main.js", compress);
}

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.watch = watch;
exports.squash = squashImages;
