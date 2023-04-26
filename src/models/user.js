const mongoose=require('mongoose')
const validator=require('validator')
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate:[validator.isEmail,"entered email is not valid "],
    },
    password:{
        type:Number,
        required:true,
        minLength:6,
        select:false
    }
}) 
module.exports=mongoose.model("User",UserSchema)
// userSchema.pre('save',async function(){
//     const user=this;
    
// })