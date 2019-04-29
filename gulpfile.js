const gulp = require("gulp"),
  terser = require("gulp-terser"),
  rename = require("gulp-rename");
  browserSync = require("browser-sync");
  eslint = require("gulp-eslint");
  prettyError = require("gulp-prettyerror");

  gulp.task("scripts",
    gulp.series("lint", function() {
      return gulp
        .src("./js/*.js")
        .pipe(terser())
        .pipe(rename({ extname: ".min.js" }))
        .pipe(gulp.dest("./build/js"));
    })
  );

gulp.task("scripts", 
gulp.series("lint", function() {
  return gulp
    .src("./js/*.js")
    .pipe(terser())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest("./build/js"));
  })
);

gulp.task("browser-sync", function(done){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  }); // end of browserSync.init

  gulp.watch(["index.html", "css/*.css", "build/js/*.js"])
  .on("change", browserSync.reload);

});// browser-sync

gulp.task("watch", function() {
    gulp.watch("js/*.js", gulp.series("scripts"));
  });

// default gulp runs everything at once in this case
gulp.task("default", gulp.parallel("browser-sync", "watch"));