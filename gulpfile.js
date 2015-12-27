var gulp = require('gulp');
var node = node;
var spawn = require('child_process').spawn;

var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var notify = require("gulp-notify");

var css_input = "./public/*";
var css_output = './static/';
var js_input = ['app.js','./controllers/*','./helpers/*'];

gulp.task('default', ['sass','server','watch_css','watch_js']);

//------------SASS
gulp.task('sass', function () {
  return gulp
    .src(css_input)
    .pipe(sass())
    .on('error', function (err) {
        notify.onError({
            title: 'Error',
            message: '<%= error.message %>',
        })(err);
        this.emit('end');
    })
    .pipe(prefix({
        browsers: ['> 1%','last 8 versions','Firefox >= 20'],
        cascade: false
    }))
    .pipe(gulp.dest(css_output))
    .pipe(rename(function (path) {
        path.basename += ".min";
        return path;
    }))
    .pipe(cssmin())
    .pipe(gulp.dest(css_output));
});
//------------Node.js Server
//Thanks to: https://gist.github.com/webdesserts/5632955
gulp.task('server', function() {
  if (node) node.kill()
  node = spawn('node', ['app.js'], {stdio: 'inherit'})
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
})

//------------WATCH
gulp.task('watch_css', function() {
    return gulp
    .watch(css_input, ['sass'])
});
gulp.task('watch_js', function(){
    return gulp
    .watch(js_input, ['server'])
})
