var express = require('express');
var router = express.Router();

let Trap = require('../models/Trap');
let bi = require('../models/bi');

/* GET users listing. */

/////////////////////////////////////////////////////////////

router.get('/showtrap', function(req, res, next) {
 
  Trap.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addtrap',(req,res)=>{
  console.log(req.body);
  let doc = new Trap(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.post('/addbi',(req,res)=>{
  console.log(req.body);
  let doc = new bi(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

router.get('/showbi', function(req, res, next) {
 
  bi.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


/////////////////////////////////////////////////////////////

module.exports = router;
