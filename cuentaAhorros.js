'use stric'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cliente = require('./cliente').schema

const CuentaAhorrosSchema = Schema({
   monto: Number,
   numero_cuenta: Number,
   Cliente: [Cliente]
})

module.exports = mongoose.model('CuentaAhorros', ProviderSchema)
