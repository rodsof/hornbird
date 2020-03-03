const Dataset = require('../models/Dataset');
// obtiene todos los proyectos del usuario actual
exports.getDataset = async (req, res) => {
    try {
        const { variable } = req.query;
        const dataset  = await Dataset.find({},{ variable : 1 }).sort({ date : -1});
        console.log(dataset);
        res.json({ dataset });
      } catch (error) {
        console.log(error);
        res.status(500).send("Error");
      }
}