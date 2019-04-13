//登录注册数据库创建
var mongoose = require('mongoose');
var sch = mongoose.Schema;
var login = new sch({
    user : String,
    pass : String
});
module.exports = login;