const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;
let peopleSchema = new Schema({

    name: {
        type: String,   
		required: [true, 'required'],		
        trim: true
    },
    ruc: {
        type: String,
        trim: true,
		unique: true,
    },
    phone: {
        type: String,
    },    
    email: {
        type: String,
        unique: true,
        required: [true, 'required'],
        lowercase: true
    },
    gender: {
        type: String
    },        
    status: {
        type: Boolean,
        default: true
    }
});

peopleSchema.plugin(uniqueValidator, { message: '{PATH} should be unique' })

peopleSchema.methods.toJSON = function() {

    let people = this;
    let peopleObject = people.toObject();
    delete peopleObject.__v;

    return peopleObject;
}
module.exports = mongoose.model('people', peopleSchema);