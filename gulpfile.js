const concat = require("gulp-concat");
const connect = require("gulp-connect");
const gulp = require("gulp");
const gutil = require("gulp-util");
const inject = require("gulp-inject");
const plumber = require("gulp-plumber");
const rimraf = require("rimraf");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const svgmin = require("gulp-svgmin");
const svgstore = require("gulp-svgstore");
const uglify = require("gulp-uglify");

//
// Variables
//
const srcDir = "./lib";
const distDir = "./demo/build";
const isDebug = !gutil.env.prod;

//
// Default
//
gulp.task("default", ["build"], () => {
  gulp.start("watch");
});

//
// Clean
//
gulp.task("clean", (cb) => {
  rimraf(distDir, cb);
});

//
// Build
//
gulp.task("build", ["clean"], () => {
  gulp.start("scripts", "styles");
});

//
// Watch
//
gulp.task("watch", ["server"], () => {
  gulp.watch(`${srcDir}/js/**/*.js`, ["scripts"]);

  gulp.watch(`${srcDir}/css/**/*.scss`, ["styles"]);
});

//
// Server
//
gulp.task("server", () => {
  connect.server({
    root: "./demo",
    port: 2222,
    livereload: false
  });
});

//
// Javascript
//
gulp.task("scripts", () => {
  const svgs = gulp.src(`${srcDir}/icons/*.svg`)
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }));
  // .pipe(gulp.dest(distDir));

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  const files = [
    `${srcDir}/js/core/bootstrap.js`,
    `${srcDir}/js/core/darkroom.js`,
    `${srcDir}/js/core/*.js`,
    // srcDir + '/js/plugins/*.js',
    `${srcDir}/js/plugins/darkroom.history.js`,
    `${srcDir}/js/plugins/darkroom.rotate.js`,
    `${srcDir}/js/plugins/darkroom.crop.js`,
    `${srcDir}/js/plugins/darkroom.pencil.js`,
    `${srcDir}/js/plugins/darkroom.rectangle.js`,
    `${srcDir}/js/plugins/darkroom.text.js`,
    `${srcDir}/js/plugins/darkroom.circle.js`,
    `${srcDir}/js/plugins/zoom.js`,
    `${srcDir}/js/plugins/darkroom.save.js`
  ];

  gulp.src(files)
    .pipe(plumber())
    .pipe(isDebug ? sourcemaps.init() : gutil.noop())
    .pipe(concat("darkroom.js", {
      newLine: ";"
    }))
    .pipe(inject(svgs, {
      transform: fileContents
    }))
    .pipe(isDebug ? gutil.noop() : uglify({
      mangle: false
    }))
    .pipe(isDebug ? sourcemaps.write() : gutil.noop())
    .pipe(gulp.dest(distDir));
});

//
// Stylesheet
//
gulp.task("styles", () => {
  gulp.src(`${srcDir}/css/darkroom.scss`)
    .pipe(plumber())
    .pipe(isDebug ? sourcemaps.init() : gutil.noop())
    .pipe(sass({
      outputStyle: isDebug ? "nested" : "compressed"
    }))
    .pipe(isDebug ? sourcemaps.write() : gutil.noop())
    .pipe(gulp.dest(distDir));
});
