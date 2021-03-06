const express = require('express');
const app = express();
const registro = require('./server.js');
const datos = require('./server.js');
const alerta = require('./server.js');
const seguimiento = require('./server.js')
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post("/api/v1/registro/create",(req,res) => {
  const {concesion,placa,taximetro,status} = req.body
  let newRegistro = registro({
    concesion:concesion,
    placa:placa,
    taximetro:taximetro,
    status:status
  })
   newRegistro.save((err,registro)=>{
     if(err) throw err;
     res.send(registro)
 })
});

app.post("/api/v1/datos/create",(req,res) => {
  const {actualizacion,verificacion,compostura,status} = req.body
  let newDatos = datos({
    actualizacion:actualizacion,
    verificacion:verificacion,
    compostura:compostura,
    status:status
  })
   newDatos.save((err,datos)=>{
     if(err) throw err;
     res.send(datos)
 })
});

app.post("/api/v1/alerta/create",(req,res) => {
  const {tipo,fecha,persona,status} = req.body
  let newAlerta = alerta({
    tipo:tipo,
    fecha:fecha,
    persona:persona,
    status:status
  })
   newAlerta.save((err,alerta)=>{
     if(err) throw err;
     res.send(alerta)
 })
});

app.post("/api/v1/seguimiento/create",(req,res) => {
  const {lugar,fecha,persona,status} = req.body
  let newSeguimiento = seguimiento({
    lugar:lugar,
    fecha:fecha,
    persona:persona,
    status:status
  })
   newSeguimiento.save((err,seguimiento)=>{
     if(err) throw err;
     res.send(seguimiento)
 })
});

/*registroMas(req, res =>{
    let {Concesion }= req.params;
    Users.findByIdAndUpdate(uid, req.body, (err, user) =>{
        Users.findById(uid).exec()
            .then(user => res.send(user))
            res.send(user);
    }).catch(err => res.send(err));
});
*/

app.listen(3000,()=>{
  console.log("server corriendo en el puerto 3000")
});
