
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        unique: [true, 'La descripción debe ser única'],
        required: [true, 'El nombre es necesario']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'El id del es necesario']
    },
    estado:{
        type: Boolean,
        default: true
    },
});

categoriaSchema.plugin( uniqueValidator, {message: '{PATH} debe ser único'} )

module.exports = mongoose.model('Categoria', categoriaSchema);