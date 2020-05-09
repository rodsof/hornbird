const Dataset = require('../models/Dataset');
// obtiene todos los proyectos del usuario actual
exports.getDataset = async (req, res) => {
    try {
        dataset  = await Dataset.find().reverse().limit(15).sort({ date : 1});
        console.log(dataset);
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

