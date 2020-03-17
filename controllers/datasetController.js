const Dataset = require('../models/Dataset');
// obtiene todos los proyectos del usuario actual
exports.getDataset = async (req, res) => {
    try {
        dataset  = await Dataset.find().sort({ date : 1}).limit(15);
        res.json({ dataset });
        
      } catch (error) {
        console.log(error);
        res.status(500).send("Error");
      }
}