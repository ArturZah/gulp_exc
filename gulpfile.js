const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

/*
  --- GULP TOP LEVEL FUNCTIONS  ---
  gulp.task - Define task
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/ 

// -- Logs Message  --
//     gulp msg

function msg (done){
  done();

  return console.log('GULP IS RUNING...');
}

gulp.task('msg', msg);

// -- Copy ALL HTML files --
//      gulp copyHtml 

function copyHtml (done){
  gulp.src('src/*.html')
    .pipe(gulp.dest('build'));

  done();
}
gulp.task('copyHtml', copyHtml);

// -- Optimize Images --
//     gulp imageMin

function imgMin (done) {
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));

  done();
}
gulp.task('imgMin', imgMin);

// -- Minift JS Files --
//      gulp minify

function minify (done){
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));

  done();
};

gulp.task('minify', minify);

// -- Compile Sass --
// -- gulp sass --

function sassy (done) {
  gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));

  done();
};

gulp.task('sass', sassy);

// USE ALL TASK IN ONE TIME
//  gulp build

gulp.task('build', gulp.series(msg, copyHtml, imgMin, minify, sassy));