'use stric'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Provider = require('./provider').schema

const ClienteSchema = Schema({
    name: String,
    apellido: String,
    cedula: Number,
    email: String,
    telefono: Number,
    sexo: {type: String, enum: ['Masculino', 'Femenino']}
})

module.exports = mongoose.model('cliente', ClienteSchema)