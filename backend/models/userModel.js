const {Schema,model, default:mongoose,}=require("mongoose");

const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const userSchema = new Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:Number,
        required:true,
        unique:true,
        maxlength:8,
        minlength:5
    },
    image:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
         
    resetPasswordToken:String,
    resetPasswordExpire:Date

});


userSchema.method.getJWTToken = function(){

    return jwt.sign({id:this._id},process.env.JWT_SECRET,{

        expiresIn:process.env.JWT_EXPIRE

    })

}


// COMPAIRE password


userSchema.methods.comparePassword = async function(enteredPassword){

    return await bcrypt.compare(enteredPassword,this.password)


}



// generating password reset token
   
userSchema.methods.getResetpasswordToken =  function(){

    // generating token
    const resetToken = crypto.randomBytes(20).toString("hex")


    // Hashing and adding resetpasswordToken to userSchema

    this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex")


    this.resetPasswordExpire = Date.now() + 15 *60*1000;

    return resetToken;

}







const  user = model('user',userSchema)
module.exports = user