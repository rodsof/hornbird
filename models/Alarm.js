const mongoose = require("mongoose");

const AlarmSchema = mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    default: Date.now()
  },
  assignTo: {
    type:String
  },
  assignDate: {
    type: Date
  }
});

module.exports = mongoose.model("Alarm", AlarmSchema);
