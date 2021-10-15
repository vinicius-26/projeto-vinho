const express = require("express");

const mongoose = require("mongoose");
require("../models/tanques")
const Tanque = mongoose.model("tanques");
class TanqueControlle {

  async create(req, res) {
    const newTanque = {
      numero: req.body.numero,
      capacidade: req.body.capacidade,
      tipo: req.body.tipo     
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
    User.find().then(userFind => {
      return res.status(200).json(userFind)
    })
  }

}

module.exports = TanqueControlle;