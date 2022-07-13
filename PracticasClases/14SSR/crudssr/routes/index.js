var express = require('express');
var router = express.Router();
var axios = require ('axios');

const httpAxios = axios.create({
    baseURL:`http://localhost:3100/v1/sextoa/api/`
})

router.get ('/', function (req, res, next){
  httpAxios.get(`productos`).then(respuesta=>{
    // console.log(respuesta.data.productos);
    res.render('index', {productos: respuesta.data.datos});
  })
  .catch(error=>{
    console.log(error.response);
  })
})

router.get('/producto/nuevo', (req, res, next)=>{
  res.render('productoForm')
})

router.get('/producto/modificar/:id', (req, res, next)=>{
  httpAxios.get(`productos/${req.params.id}`).then(respuesta=>{
    console.log(respuesta.data);
    res.render('productoForm', {producto: respuesta.data})
  })
  .catch(error=>{
    console.log(error.response);
  })
  
})

router.get('/producto/eliminar/:id', (req, res, next)=>{
  httpAxios.delete(`productos/${req.params.id}`).then(respuesta=>{
    res.redirect('/')
  })
  .catch(error=>{
    console.log(error.response);
  })
})



// /* GET home page. */
// router.get('/', function(req, res, next) {
  //   res.render('index', { title: 'Express' });
  // });
  
  module.exports = router;
