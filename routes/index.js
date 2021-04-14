var express = require('express');
var router = express.Router();

var hold = require('../models/hold');
var index_shidu = require('../models/index_shidu');
const index_wendu = require('../models/index_wendu');
var wendu = require('../models/index_wendu');

var responData

var allowCors = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
};

router.use(function(req,res,next){
  responData={
      code:0,
      message:''
  }
  next();
})

router.use(allowCors)

/* GET home page. */
router.get('/', function(req, res, next) {
  hold.find({}).then((data) => {
    console.log(data)
  })
  res.render('index', { title: '温控后端' });
});


/**手动操作按钮 */
router.get('/hold', function(req, res, next) {
  hold.find({}).then((res) => {
    console.log(res)
  })
})

router.post('/hold/add',function(req,res){
    var { code, description } = req.body
    var channel = new hold({
        hold: false
    });
    channel.save().then(function(info){
      responData.message='手动操作成功！';
      responData.code = 200;
      res.json(responData);
    })
});

/**温度相关接口 */
router.get('/wendu', function(req, res){
  index_wendu.find({}).then((data) => {
    const params = {
      code: 200,
      message: '请求成功！',
      data: data
    }
    res.json(params);
  })
})

router.post('/wendu/add', function(req, res) {
  const thisDate = new Date();
  var channel = new index_wendu({
      date: new Date(),
      time: thisDate.getHours(),
      hum: [1,2,3,4,5,6,7,8,9]
  });
  channel.save().then(function(info){
    responData.message='手动操作成功！';
    responData.code = 200;
    res.json(responData);
  })
})

/**湿度相关接口 */
router.get('/shidu', function(req, res) {
  index_shidu.find({}).then((data)=> {
    console.log(data);
    const params = {
      code: 200,
      message: '请求成功！',
      data: data
    }
    res.json(params);
  })
})

router.post('/shidu/add', function(req, res) {
  const thisDate = new Date();
  var channel = new index_shidu({
      date: new Date(),
      time: thisDate.getHours(),
      hum: [1,2,3,4,5,6,7,8,9]
  });
  channel.save().then(function(info){
    responData.message='手动操作成功！';
    responData.code = 200;
    res.json(responData);
  })
})

module.exports = router;
