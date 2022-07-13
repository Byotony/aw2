var express = require('express');
var router = express.Router();
var axios = require ('axios');

const httpAxios = axios.create({
    baseURL:`http://localhost:2500/v1/sextoa/api/`
})

router.get ('/', function (req, res, next){
  httpAxios.get(`productos`).then(respuesta=>{
    // console.log(respuesta.data.productos);
    res.render('index', {productos: respuesta.data.productos});
  })
})

router.get('/producto/nuevo', (req, res, next)=>{
  res.render('productoForm', {})
})

router.get('/producto/modificar/:id', (req, res, next)=>{
  httpAxios.get(`productos/${req.params.id}`).then(respuesta=>{
    res.render('productoForm', {producto: respuesta.data})
  })
})

router.get('/producto/eliminar/:id', (req, res, next)=>{
  httpAxios.delete(`productos/${req.params.id}`).then(respuesta=>{
    res.redirect('/')
  })
})



// /* GET home page. */
// router.get('/', function(req, res, next) {
  //   res.render('index', { title: 'Express' });
  // });
  
  module.exports = router;
