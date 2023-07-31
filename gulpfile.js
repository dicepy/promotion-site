const minify = require('gulp-minify');
const gcmq = require('gulp-group-css-media-queries')
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

gulp.task('css', () => {
  return gulp.src(['style/style.css', 'style/normalize.css'])
    .pipe(gcmq())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/style'));
});

gulp.task('js', function() {
  return gulp.src('script/*.js')
    .pipe(minify({ext:{
      src:'.js',
      min:'.js'},
  noSource: true}))
    .pipe(gulp.dest('dist/script'))
});

gulp.task('html', () => {
  return gulp.src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('fonts', function() {
  return gulp.src('fonts/*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('php', function () {
  return gulp.src('tg.php')
  .pipe(gulp.dest('dist'))
});

gulp.task('img', function () {
  return gulp.src('img/*')
  .pipe(gulp.dest('dist/img'))
});

gulp.task('favs', function () {
  return gulp.src(['*.png','*.ico','*.webmanifest'])
  .pipe(gulp.dest('dist'))
});

gulp.task( 'compress',  gulp.series('js', 'html', 'css', 'fonts', 'php', 'img', 'favs'));