const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TanqueSchema = new Schema({
  numero: { type: Number, required: true },
  capacidade: { type: Number, required: true },
  tipo: { type: String, required: true },
 
});
mongoose.model('tanques', TanqueSchema);

