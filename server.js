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

var datos = mongoose.model('datos',datosSchema);
var registro = mongoose.model('registro',registroSchema);
module.exports = registro
module.exports = datos
