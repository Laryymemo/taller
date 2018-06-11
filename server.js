const mongoose = require('mongoose');
mongoose.connect("mongodb://larrymemo:Calle13num1@ds247290.mlab.com:47290/tallergaso");
//mongodb://<dbuser>:<dbpassword>@ds247290.mlab.com:47290/tallergaso
const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

      const registroSchema = new Schema({
            idnum:ObjectId,
            concesion:String,
            placa:String,
            taximetro:String,
            status:String
      });
      const datosSchema = new Schema({
            idnum:ObjectId,
            actualizacion:String,
            verificacion:String,
            compostura:String,
            status:String
      });
      const alertaSchema = new Schema({
            idnum:ObjectId,
            tipo:String,
            fecha:String,
            persona:String,
            status:String
      });
      const seguimientoSchema = new Schema({
            idnum:ObjectId,
            lugar:String,
            fecha:String,
            persona:String,
            status:String
      });
var alerta = mongoose.model('alerta',alertaSchema);
var datos = mongoose.model('datos',datosSchema);
var registro = mongoose.model('registro',registroSchema);
var seguimiento =  mongoose.model('seguimiento', seguimientoSchema);
module.exports = registro
module.exports = datos
module.exports = alerta
module.exports = seguimiento
