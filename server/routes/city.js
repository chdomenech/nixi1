const express = require("express");
const cors = require('cors');
const City = require("../models/city");
const app = express();
app.use(cors());

/**
 * Register a city
 */
app.put("/api/city/saveCity", (req, res) => {

  let body = req.body;
  const data = {
    name: body.name,
    country: body.country
  }  
  let city = new City(data);  
  City.findOne(
    data
  ).exec((err, cityFound) => {    
		  if (err) {
			return res.status(500).json({
			  ok: false,
			  err,
			});
		  }
		  if (cityFound) {
			return res.status(400).json({
			  ok: false,
			  err: {
				cityrepeat: true,
			  },
			});
		  }
		 city.save((err, city) => {
			if (err) {
			  return res.status(400).json({
				ok: false,
				err,
			  });
			}
			res.json({
			  ok: true,
			  saved: true,
			});
		});
	});
});

/** 
 * Get Cities
 * */
app.get("/api/city/getCities", (req, resp) => {
  let body = req.body;
    if(body.country === undefined || body.country === null ){
   return resp.status(400).json({
	  ok: false,
	  err:{
		 msg:'Country is required',
		 countryrequired:true
	  },
	});
  }
  
  City.find({ status: true , country: body.country}, "name country id")
    .exec((err, cities) => {
      if (err) {
        return resp.status(400).json({
          ok: false,
          err,
        });
      }
      resp.json({
        ok: true,
        cities
      });
    });
});

module.exports = app;