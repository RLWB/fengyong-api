const express = require("express");
const router = express.Router();
module.exports = (app) => {
  router.get("/", (req, res) => {
    res.status(201).send({
      success: true,
      data: {
        date: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        data: [
          130000, 123000, 130000, 50000, 200000, 198000, 300000, 480000, 500000,
          560000, 479000, 1000000,
        ],
      },
    });
  });
  app.use("/sales", router);
};
