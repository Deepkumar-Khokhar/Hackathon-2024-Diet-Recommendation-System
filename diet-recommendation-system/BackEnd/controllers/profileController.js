const User = require('../models/User');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.age = req.body.age || user.age;
            user.gender = req.body.gender || user.gender;
            user.weight = req.body.weight || user.weight;
            user.height = req.body.height || user.height;
            user.dietaryPreferences = req.body.dietaryPreferences || user.dietaryPreferences;
            user.allergies = req.body.allergies || user.allergies;
            user.healthGoals = req.body.healthGoals || user.healthGoals;

            if (req.body.password) {
                user.password = req.body.password;
            }

            const updatedUser = await user.save();
            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                role: updatedUser.role,
                token: generateToken(updatedUser._id),
            });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
