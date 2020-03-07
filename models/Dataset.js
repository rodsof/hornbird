const mongoose = require("mongoose");

const DatasetSchema = mongoose.Schema({
  date: {
    type: String,
    default: Date.now
  },
  chwtin: {
    type: String,
    required: false
  },
  chwtout: {
    type: Number,
    required: false
  },
  chwvalveposition: {
    type: Number,
    required: false
  },
  chwfr: {
    type: Number,
    required: false
  },
  safanfrequency: {
    type: Number,
    required: false
  },
  rafanfrequency: {
    type: Number,
    required: false
  },
  sat: {
    type: Number,
    required: false
  },safr: {
    type: Number,
    required: false
  },
  saductstpressure: {
    type: Number,
    required: false
  },
  safanfrequency: {
    type: Number,
    required: false
  },
  spacet: {
    type: Number,
    required: false
  },
  ahucop: {
    type: Number,
    required: false
},
totalpower: {
  type: Number,
  required: false
},
energymonthly: {
  type: Number,
  required: false
},
  oat: {
    type: Number,
    required: false
  },
  spacerh: {
    type: Number,
    required: false
  },
  oatrh: {
    type: Number,
    required: false
  },
  vav1fr: {
    type: Number,
    required: false
  },
  vav2fr: {
    type: Number,
    required: false
  },
  vav3fr: {
    type: Number,
    required: false
  },
  vav4fr: {
    type: Number,
    required: false
  },
  oafr: {
    type: Number,
    required: false
  },
  oadamperopen: {
    type: Number,
    required: false
  },
  space: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model("Dataset", DatasetSchema);
