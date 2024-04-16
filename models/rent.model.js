//importaciones
const mongoose = require("mongoose")

//definición de esquema
const rentSchema = new mongoose.Schema({
    idCar: {
        type: String, 
        required: true
    },
    idUser: {
        type: String, 
        required: true
    },
    dateIn: {
        type: String, 
        required: true
    },
    dateOut: {
        type: String, 
        required: false
    },
    price: {
        type: Number, 
        required: false
    },
    status: {
        type: Number,  // 0,1,2 para diferentes status de renta
        required: true
    },
});

const Rent = mongoose.model("Rent", rentSchema)

module.exports = Rent