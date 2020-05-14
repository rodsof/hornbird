const mongoose = require("mongoose");

const Testing_aiSchema = mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  chwtin: {
    type: Number,
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
  },
  "dT Air, C" : { // OJO
    type: Number,
    default: 20
  },
  "RA FR, L/s" : {
    type: Number,
    default: 30
  },
  "dT CHW, C" : {
    type: Number,
    default: 10
  },
 "Tin Condenser, C" :{
 type: Number,
    default: 22
 }
});

module.exports = mongoose.model("Testing_ai", Testing_aiSchema);
