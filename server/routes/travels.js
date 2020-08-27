const express = require("express");
const cors = require('cors');
const _ = require("underscore");
const app = express();
app.use(cors());

/**
 * Create a travel
 */
app.put("/api/travel/createTravel", (req, resp) => {  
    
  const body = req.body;
  
    resp.json({
	  ok: true,
	}); 
});

module.exports = app;