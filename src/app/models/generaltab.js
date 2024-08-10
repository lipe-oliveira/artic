const mongoose = require("../../database/index");
const mongoose_paginate = require('mongoose-paginate');

const schema = new mongoose.Schema({
    tipo:{ // ex: embargos, apelação e agravo de instrumento
        type: String,
        required: true
    },
    cabecalho:{
        type:String,
        required:false
    },
    ementa: {
        type: String,
        required:false
    },
    relatório:[
        {
        imagem:{
            type: String,
            setMaxListeners: 100000000000000000000000000000000000000000000000        
        }
    }
    ],

    img:{
        type: String,
        required:false
    },

    createdAt:{
        type: Date,
        default: Date.now
    }
});

schema.plugin(mongoose_paginate);

const Sobre = mongoose.model("Sobre", schema);
module.exports = Sobre;