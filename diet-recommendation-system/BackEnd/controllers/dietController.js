const DietPlan = require('../models/DietPlan');

exports.getDietPlan = async (req, res) => {
    try {
        const dietPlan = await DietPlan.findOne({ user: req.user._id });
        if (dietPlan) {
            res.json(dietPlan);
        } else {
            res.status(404).json({ error: 'Diet plan not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateDietPlan = async (req, res) => {
    try {
        const dietPlan = await DietPlan.findOne({ user: req.user._id });
        if (dietPlan) {
            dietPlan.plan = req.body.plan || dietPlan.plan;
            const updatedDietPlan = await dietPlan.save();
            res.json(updatedDietPlan);
        } else {
            const newDietPlan = new DietPlan({
                user: req.user._id,
                plan: req.body.plan,
            });
            const savedDietPlan = await newDietPlan.save();
            res.json(savedDietPlan);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
