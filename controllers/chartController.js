const Chart = require('../models/Chart');
// obtiene todos los proyectos del usuario actual
exports.getCharts = async (req, res) => {
    try {
        const { item } = req.query;
        // get charts by item
        const charts  = await Chart.find({ item }).sort({ name: -1 });; // chart itemid must be equal to item id
        res.json({ charts });
      } catch (error) {
        console.log(error);
        res.status(500).send("Error");
      }
}