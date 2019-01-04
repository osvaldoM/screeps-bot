const gulp = require('gulp');
const path = require('path');
const screeps = require('gulp-screeps');
const credentials = require('./.screeps.json');

gulp.task('screeps', (done) => {
    gulp.src(path.resolve(__dirname, 'dist/main.js'))
        .pipe(screeps(credentials));
    done();
});

gulp.task('dummy', (done) => {
    done();
});
