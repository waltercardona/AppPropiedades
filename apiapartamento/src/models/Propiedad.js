const { Schema, model } = require('mongoose');

const PropiedadesSchema = new Schema ({
    title: { type: String, requiered: true },
    type: { type: String, requiered: true },
    address: { type: String, requiered: true, unique: true },
    rooms: { type: Number, requiered:true },
    price: { type: Number, requiered:true },
    image:{type:String},
    user: { type: String, required: true }
}, {
    timestamps: true
})

module.exports = model('Apartamento', PropiedadesSchema);