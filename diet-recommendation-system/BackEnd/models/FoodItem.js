const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    fat: { type: Number, required: true },
    carbs: { type: Number, required: true },
    vitamins: { type: [String], default: [] },
    minerals: { type: [String], default: [] },
}, { timestamps: true });

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;
