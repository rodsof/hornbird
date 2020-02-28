const Chart = require('../models/Item');
// obtiene todos los proyectos del usuario actual
exports.getCharts = async (req, res) => {
    try {
        // extraer el proyecto y comprobar si hay tareas
        const { item } = req.query;
        // obtener las tareas por proyecto
        const charts  = await Chart.find({ item }); // chart itemid must be equal to item id
        res.json({ charts });
      } catch (error) {
        console.log(error);
        res.status(500).send("Error");
      }
}