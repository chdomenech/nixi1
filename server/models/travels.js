const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let travelsSchema = new Schema({

  people:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "people",
    required: [true, 'required']	
  }],

	city:[{
		type: mongoose.Schema.Types.ObjectId,
    ref: "city",
    required: [true, 'required']	
	}],
  date: {
    type: Date,
    required: [true, 'required']	
  },  
  
  type:{
    type: String,  
    required: [true, 'required']	
  },
  
  flyNumber:{	  
	  type: String,
	  required: [true, 'required']	
  },  
  
  status: {
      type: Boolean,
      default: true
  }
});


travelsSchema.methods.toJSON = function() {

    let travels = this;
    let travelsObject = travels.toObject();
    delete travelsObject.__v;

    return travelsObject;

}

module.exports = mongoose.model('travels', travelsSchema);