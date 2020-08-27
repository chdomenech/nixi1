const People = require("../models/people");


let savePeople = (data) => {  
  return new Promise((resolve, reject) => {    
    let people = new People(data);  
    people.save((err, people) => {
       if (err) {
         reject(err);        
       }else{        
         resolve(people);
       }
     });
   }); 
 }

 let getPeopleById = (id) => {  
  return new Promise((resolve, reject) => {        
    data = {_id:id};

    People.findOne(
      data
    ).exec((err, people) => {    
       if (err || !people) {
         reject(err);        
       }else{        
         resolve(people);
       }
     });
   }); 
 }

module.exports = {
  savePeople,
  getPeopleById
};