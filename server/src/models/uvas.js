const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UvaSchema = new Schema({
  nome_uva: { type: String, required: true },
  id_cliente: { type: String, required: true },
  id_tanque: { type: String, required: true },
  safra: { type: String, required: true },
  lote: { type: String, required: true },
  date: {type: Date, default: Date.now()}
});
mongoose.model('uvas', UvaSchema);

