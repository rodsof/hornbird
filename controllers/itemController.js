const Item = require('../models/Item');

// Obtiene todos los proyectos del usuario actual
exports.getItems = async (req, res) => {
    try {
        let items = await Item.find().sort({_id: -1});
        console.log("entra");
        console.log(items);
        res.json({ items });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}