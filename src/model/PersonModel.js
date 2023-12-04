const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  approved: {
    type: Boolean,
    required: true,
  },
});

const PersonModel = mongoose.model("Person", PersonSchema);

module.exports = PersonModel;
