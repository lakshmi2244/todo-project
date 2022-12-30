const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
});

module.exports = Tag = mongoose.model("tag", TagSchema);