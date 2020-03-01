const Chart = require('../models/Chart');
// obtiene todos los proyectos del usuario actual
exports.getCharts = async (req, res) => {
    try {
        // extraer el proyecto y comprobar si hay tareas
        const { item } = req.query;
        // obtener las tareas por proyecto
        const charts  = await Chart.find({ item }).sort({ name: -1 });; // chart itemid must be equal to item id
        res.json({ charts });
      } catch (error) {
        console.log(error);
        res.status(500).send("Error");
      }
}