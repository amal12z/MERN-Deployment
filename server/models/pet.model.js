const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Pet Name is required"],
        unique: [ true, "Pet Name must be unique"], // Black Belt 1 : Ensure the pet name is unique when adding it to the database
        minlength: [3, "Pet Name must be at least 3 characters long"]
        },
    
    type : {
        type: String,
        required: [true, "Pet Type is required"],
        minlength: [3, "Pet Type must be at least 3 characters long"]
    },

    desc  : {
        type: String,
        required: [true, "Pet Description is required"],
        minlength: [3, "Pet Description must be at least 3 characters long"]
    },

    skill1 : {
        type: String,
    },

    skill2 : {
        type: String,
    },

    skill3 : {
        type: String,
    },
    likes : { // Black Belt 4 : Include a button to like a pet, disable it when clicked until the component reloads
        type: Number,
    }
    

});


// PetSchema.path('name').validate(async (name)=>{
//     const nameCount = await mongoose.model.Pet.countDocuments({name})
//     return !nameCount}, 'Name Already Exists')

    

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;