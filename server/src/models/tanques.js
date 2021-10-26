const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TanqueSchema = new Schema({
  numero: { type: Number, required: true },
  capacidade: { type: Number, required: true },
  tipo: { type: String, required: true },
  uva_input: { type: String, required: false },
  qtd_uva_input: { type: String, required: false },
  clientes_tanque: { type: String, required: false },
  date: {type: Date, default: Date.now()}
});
mongoose.model('tanques', TanqueSchema);

