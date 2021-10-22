const express = require("express");

const mongoose = require("mongoose");
require("../models/uvas")
const Uva = mongoose.model("uvas");
class UvaController {

  async create(req, res) {
    const newUva = {
      nome_uva: req.body.nome_uva,
      id_cliente: req.body.id_cliente,
      id_tanque: req.body.id_tanque,
      safra: req.body.safra,   
      lote: req.body.lote,   
    };
    new Uva(newUva)
      .save()
      .then(() => {
        return res.status(200).json({ message: "Uva Cadastrado com Sucesso" })
      }).catch((erro) => {
        return res.status(400).json({ error: erro.message })
      })
  } 

  async index(req, res) {
      Uva.find().sort({date: ('desc')}).then(uvaFind => {
      return res.status(200).json(uvaFind)
    })
  }

}

module.exports = UvaController;