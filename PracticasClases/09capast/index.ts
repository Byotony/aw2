import express from 'express'

const app = express();
const PORT = 3000;

app.get('/',(req, res) =>{
    
res.json({
    msg:'ok'
})

})


app.listen(PORT, ()=>{
    console.log('Prueba funcionando');
    
})

console.log("ok");
