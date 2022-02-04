const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();
const less = require('gulp-less');
const exec = require('gulp-exec');




gulp.task('style', style)

function style() {
    return gulp.src("/style/section/section.css") 
    
    // .pipe(less())

    .pipe(gulp.dest("/public/stylesheet/")) 
    .pipe(browserSync.stream()); 
}

gulp.task('watch', function(){
    watch('/style/section/', style) // barcha turdagi less faylarni tekshir degan buyruq berdik
    watch('/views/partials/section.hbs', browserSync.reload) // Index.html ichidagi bo'ladigan o'zgarishlarni srazi ekranga chiqarib bergin degan buyruq berildi 
})


gulp.task('serer', function() {
    browserSync.init({
        server: {
            baseDir: "/app.js"
        }
    });
});

gulp.task('server', (cb) => {
    exec('node app.js', err => err);
});

gulp.task('default' , gulp.parallel('style', 'watch', 'server', 'serer' )) // 3 taskni bitta gulp.ga uladim