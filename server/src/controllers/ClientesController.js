const express = require("express");

const mongoose = require("mongoose");
require("../models/tanques")
const Cliente = mongoose.model("clientes");
class ClienteController {

  async create(req, res) {
    const newCliente = {
      nome: req.body.nome,
      telefone: req.body.telefone,
      email: req.body.email,
      rua: req.body.rua,
      numend: req.body.numend,
      bairro: req.body.bairro,
      regiao: req.body.regiao
    };
    new Cliente(newCliente)
      .save()
      .then(() => {
        return res.status(200).json({ message: "Cliente Cadastrado com Sucesso" })
      }).catch((erro) => {
        return res.status(400).json({ error: erro.message })
      })
  } 

  async index(req, res) {
      Cliente.find().then(clienteFind => {
      return res.status(200).json(clienteFind)
    })
  }

}

module.exports = ClienteController;