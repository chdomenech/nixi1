const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let travelsSchema = new Schema({

  person:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "person"
  }],

	city:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: "city"
	}],
	country:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: "country"
	}],	  
  date: {
    type: Date,
  },  
  
  type:{
	type: String,  
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

module.exports = mongoose.model('wallets', travelsSchema);