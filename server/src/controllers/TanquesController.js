const express = require("express");

const mongoose = require("mongoose");
require("../models/tanques")
const Tanque = mongoose.model("tanques");
class TanqueController {

  async create(req, res) {
    const newTanque = {
      numero: req.body.numero,
      capacidade: req.body.capacidade,
      tipo: req.body.tipo,
      
    };
    new Tanque(newTanque)
      .save()
      .then(() => {
        return res.status(200).json({ message: "Tanque Cadastrado com Sucesso" })
      }).catch((erro) => {
        return res.status(400).json({ error: erro.message })
      })
  } 

  async index(req, res) {
      Tanque.find().sort({date: 'desc'}).then(tanqueFind => {
      return res.status(200).json(tanqueFind)
    })
  }

  async insert(req, res) {
    Tanque.findById(req.body._id).then(tanqueFind => { 
      tanqueFind.uva_input = req.body.uva_input,
      tanqueFind.qtd_uva_input = req.body.qtd_uva_input,
      tanqueFind.clientes_tanque = req.body.clientes_tanque,
      tanqueFind.save();

    return res.status(200).json(tanqueFind)
  })
  }
}



module.exports = TanqueController;