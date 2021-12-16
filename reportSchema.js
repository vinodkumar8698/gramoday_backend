const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  userID: {
    type: Number,
    // required: true,
  },
  marketID: {
    type: Number,
    // required: true,
  },
  marketName: {
    type: String,
    // required: true,
    // minlength: [10, "10 characters"],
    // maxlength: 100,
  },
  cmdtyID: {
    type: Number,
    // required: true,
    // minlength: [1, "minimum 1 Number"],
    // maxlength: 2,
  },
  marketType: {
    type: String,
    // required: true,
  },

  cmdtyName: {
    type: String,
  },
  priceUnit: {
    type: String,
    // required: true,
  },
  convFctr: {
    type: Number,
    // required: true,
  },
  minPrice: {
    type: Number,
    // required: true,
  },

  maxPrice: {
    type: Number,
    // required: true,
  },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
