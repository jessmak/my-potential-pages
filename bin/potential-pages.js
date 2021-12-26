#!/usr/bin/env node

// process.argv命令行中传递的参数
process.argv.push('--cwd')
process.argv.push(process.cwd())

process.argv.push('--gulpfile')
// require找到该模块,resolve找到该模块所在的路径,相对路径 
//输入..时会找../package.json 中的main字段 ../lib/index
process.argv.push(require.resolve('..'))
// 原理: my-potential-pages\node_modules\.bin\gulp.cmd本质就是执行该文件
require('gulp/bin/gulp')
