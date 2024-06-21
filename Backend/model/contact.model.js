import mongoose from "mongoose";

const contactSchema=mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
})
const Contact= mongoose.model("contactus",contactSchema);
export default Contact;