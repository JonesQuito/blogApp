const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define um esquema com seus atributos, typos e restrições
const Postagem = new Schema({
    titulo:{
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    },
    categoria:{
        type: Schema.Types.ObjectId,
        ref: "categorias",
        required: true
    },
     data: {
         type: Date,
         default: Date.now()
     }
});

// Define um model passango o nome do model e um Schema
mongoose.model("postagens", Postagem);