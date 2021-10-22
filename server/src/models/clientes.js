const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
  nome: { type: String, required: true },
  telefone: { type: Number, required: true },
  email: { type: String, required: true },
  rua: { type: String, required: true },
  numend: { type: Number, required: true },
  bairro: { type: String, required: true },
  regiao: { type: String, required: true },
  date: {type: Date, default: Date.now()}
});
mongoose.model('clientes', ClienteSchema);
