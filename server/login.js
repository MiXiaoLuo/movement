//使用登录注册数据库
var mong = require('mongoose');
var login = require('./logins');
module.exports = mong.model('login',login);
