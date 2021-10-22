const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TanqueSchema = new Schema({
  numero: { type: Number, required: true },
  capacidade: { type: Number, required: true },
  tipo: { type: String, required: true },
  date: {type: Date, default: Date.now()}
 
});
mongoose.model('tanques', TanqueSchema);

