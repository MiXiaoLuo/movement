var exp = require('express');
var router = exp.Router();
var User = require('./login');
var json = {};
router.use(function (req, res, next) {  //返回给前端信息
    json = {
        code:0,
        msg:'',
        show:{}
    };
    next();
});

router.get('/enroll',function (req,res){
    var user = req.query.user;
    var pass = req.query.pass;
    User.findOne({
        user:user
    }).then(function (info) {
        if (info) {
            json.code = 1;
            json.msg = '用户已存在!';
        }else {
            var uc = new User({
                user:user,
                pass:pass
            });
            return uc.save();
        }
    }).then(function (info1) {
        res.send(json);
        res.end();
    })
});

router.get('/login',function (req, res) {
    var user = req.query.user;
    var pass = req.query.pass;
    User.findOne({user:user,pass:pass}).then(function (info) {
        if (info) {
            json.code = 2;
            json.msg = '登录成功!';
            json.show = info;
            res.send(json);
            res.end();
        }
        json.code = 3;
        json.msg = '用户不存在!';
        res.send(json);
        res.end();
    })
});

module.exports = router;