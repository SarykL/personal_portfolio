import gulp from 'gulp';
import changed from 'gulp-changed';
import filter from 'gulp-filter';
import imagemin from 'gulp-imagemin';
import gulpIf from 'gulp-if';

const { INCLUDE_ROBOTS } = process.env;

gulp.task('copy', () => (
	gulp.src('app/resources/**/*')
		.pipe(imagemin())
		.pipe(changed('dist'))
		.pipe(gulpIf(!INCLUDE_ROBOTS, filter(file => !/resources[\\\/]robots\.txt/.test(file.path))))
		.pipe(gulp.dest('dist'))
));
