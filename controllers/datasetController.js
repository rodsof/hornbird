/*const Dataset = require('../models/Dataset');*/
const Testing_ai = require('../models/Testing_ai');

// obtiene todos los proyectos del usuario actual
exports.getDataset = async (req, res) => {
    try {
       // dataset  = await Dataset.find().sort({ date : -1}).limit(15);
       dataset  = await Testing_ai.find().sort({ date : -1});
      dataset.reverse();
        res.json({ dataset });
      } catch (error) {
        console.log(error);
        res.status(500).send("Error");
      }
}

exports.createDataset = async (req, res) => {
  for(var key in req.body) {
    setTimeout (function () {
               // crear 
               dataset = new Dataset(req.body[key]);
               // guardar 
               console.log(dataset);
               dataset.save();
      
  }, 100000)
}
}

