"use strict";
var gulp = require('gulp');
var cmdPack = require('gulp-cmd-pack');
var uglify = require('gulp-uglify');
 
gulp.task('cmd', function () {
    gulp.src('./js/main.js') //main文件 
        .pipe(cmdPack({
            mainId: 'main', //初始化模块的id 
            base: './js', //base路径 
            alias: {
                jquery: '../node_modules/jquery/dist/jquery'
            }
        }))
        .pipe(uglify({ //压缩文件，这一步是可选的 
            mangle: {
                except: ['require']
            }
        }))
        .pipe(gulp.dest('./dist'));//输出到目录 
});