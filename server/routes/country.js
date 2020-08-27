const express = require("express");
const cors = require('cors');
const Country = require("../models/country");
const app = express();
app.use(cors());


/** 
 * Get Countries 
 * */
app.get("/api/country/getCountries",(req, resp) => {
  Country.find({ status: true }, "name code id")
    .exec((err, countries) => {
      if (err) {
        return resp.status(400).json({
          ok: false,
          err,
        });
      }
      resp.json({
        ok: true,
        countries
      });
    });
});

/**
 * Register a country
 */
app.put("/api/country/saveCountry", (req, res) => {

  let body = req.body;
  
  let country = new Country({
    name: body.name,
    code: body.code
  });

  country.save((err, country) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      save: true,
    });
  });
});

module.exports = app;