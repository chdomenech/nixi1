const express = require("express");
const cors = require('cors');
const travelBackend = require("../backend/travel");
const Travels = require("../models/travels");
const app = express();
app.use(cors());

/**
 * Create a travel
 */
app.put("/api/travel/createTravel", (req, resp) => {  
    
  const body = req.body;
  
  const data = {
    people:body.people,
    city:body.city,
    date:body.date,
    type: body.type,
    flyNumber: body.flyNumber
  }  

  travelBackend.saveTravel(data).then(result=>{
    resp.json({
      ok: true,
      saved:true,
      data: result
    }); 

    }).catch(err => {
      return resp.status(400).json({
        ok: false,
        err
      });          
    });
});

app.get("/api/travel/getTravels",(req, resp) => {
	
  let from = req.query.from || 0;
   from = Number(from);
 
   let to = req.query.to || 5;
   to = Number(to);

  console.log(from,to);

   travelBackend.getTravels(from,to).then(result=>{
    resp.json({
      ok: true,
      data: result
    }); 

    }).catch(err => {
      return resp.status(400).json({
        ok: false,
        err
      });          
    });

 });

module.exports = app;