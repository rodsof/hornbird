const Item = require('../models/Item');

// Obtiene todos los proyectos del usuario actual
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find().sort({ name: -1 });
        res.json({ items });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}