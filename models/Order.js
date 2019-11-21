const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: new Date()
    },
    userId: {
        type: String,
        required: true
    },
    record: [{
        type: String,
        required: true
    }]
});



module.exports = mongoose.model("Order", OrderSchema)