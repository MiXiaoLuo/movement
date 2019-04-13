var exp = require('express');
var app = exp();
var mog = require('mongoose');
var parser = require('body-parser');
var api = require('./api');

app.use(parser.urlencoded({extended: true}));

app.use('/',api);

mog.connect('mongodb://localhost:27022/wx',{useNewUrlParser:true},function (err) {
    err ? console.log(err): console.log('数据库连接成功!')
});

app.listen(8086);