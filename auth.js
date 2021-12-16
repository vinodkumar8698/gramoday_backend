const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

require("../form-validation-yt/backend/db/connectDB");

const Report = require("./reportSchema");

// user create report request

router.post("/report-form", async (req, res) => {
  const {
    _id,
    userID,
    marketID,
    marketName,
    cmdtyID,
    marketType,
    cmdtyName,
    priceUnit,
    convFctr,
    minPrice,
    maxPrice,
  } = req.body;

  const reportDetails = new Report({
    _id: mongoose.Types.ObjectID,
    userID,
    marketID,
    marketName,
    cmdtyID,
    marketType,
    cmdtyName,
    priceUnit,
    convFctr,
    minPrice,
    maxPrice,
  });
  await reportDetails.save();
  console.log(reportDetails);
  return res
    .status(200)
    .json({ status: "success", reportID: `${reportDetails._id}` });
});

//    Get the list of aggregated reports by Commodity

router.get("/report-data/cmdtyID/:cmdtyID", async (req, res) => {
  try {
    const cmdtyID = req.params.cmdtyID;
    const showData = await Report.find({ cmdtyID });

    if (!showData) {
      return res.status(404).send("error getting data from database");
    } else {
      res.send(showData);
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
