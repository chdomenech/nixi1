const Travel = require("../models/travels");


let saveTravel = (data) => {  
  return new Promise((resolve, reject) => {    
    let travel = new Travel(data);  
    travel.save((err, travel) => {
       if (err) {
         reject(err);        
       }else{        
         resolve(travel);
       }
     });
   }); 
 }

 let getTravels= (from, to)=>{
  return new Promise((resolve, reject) => {    
       
   Travel.find({ status: true })
   .skip(from)
     .limit(to)
     .exec((err, travel) => {
      if (err) {
        reject(err);        
      }else{        
        resolve(travel);
      }
     });
   }); 
 }

module.exports = {
  saveTravel,
  getTravels
};