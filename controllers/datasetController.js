const Dataset = require('../models/Dataset');
// obtiene todos los proyectos del usuario actual
exports.getDataset = async (req, res) => {
    try {
        dataset  = await Dataset.find().sort({ date : -1});
        res.json({ dataset });
        
      } catch (error) {
        console.log(error);
        res.status(500).send("Error");
      }
}

exports.createDataset = async (req, res) => {

  for ( var i=0; i<req.body.length ; i++){
    setTimeout (function () {
               // crear 
               dataset = new Dataset(req.body[i]);
               // guardar 
               dataset.save();
      
  }, 30000)
}
}

