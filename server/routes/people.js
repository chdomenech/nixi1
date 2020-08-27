const express = require("express");
const cors = require('cors');
const People = require("../models/people");

const app = express();
app.use(cors());


/**
 * Register a people
 */
app.put("/api/people/register",(req, res) => {
  let body = req.body;
  
    const data = {
		ruc:body.ruc,
		phone:body.phone,
		email:body.email,
		gender:body.gender,
		name: body.name
  }  
  
	let people = new People(data);  
	 people.save((err, people) => {
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

/** 
 * Get people 
 * */
app.get("/api/people/getPeople",(req, resp) => {
	
 let from = req.query.from || 0;
  from = Number(from);

  let to = req.query.to || 5;
  to = Number(to);
	
  People.find({ status: true }, "name ruc phone email id gender")
	.skip(from)
    .limit(to)
    .exec((err, people) => {
      if (err) {
        return resp.status(400).json({
          ok: false,
          err,
        });
      }
      resp.json({
        ok: true,
        people
      });
    });
});

module.exports = app;