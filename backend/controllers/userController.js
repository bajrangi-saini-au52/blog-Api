const user = require("../models/userModel");
const sendToken = require("../utils/jwtToken");


exports.registerUser = async(request,response)=>{

    const {name,Email,password} = request.body;

    const user = await user.create({
        name, Email , password
    })

    sendToken(user,201,response)
}

exports.loginUser = async(request,response)=>{

    const{Email,password} = request.body

    // checking if user has given password

    if(!Email || !password){
        return response.status(401).send("please Enter Email and password")
    }

    const user = await user.findOne({email}).select("+password")


    if(!user){
        return response.send("Invalid email && password")
    }

    sendToken(user,200,response)
}



exports.deleteUser = async(request,response)=>{

    const user = await user.findById(request.parms.id)

    if(!user){
        return response.status(400).send({
            success:false,
            message:"user not found"
        })
    }



}



exports.updateUser = async(request,response)=>{

    const user = await user.findById(request.parms.id)

    if(!user){
        return response.status(500).send({
            success:true,
            message:"user not found"
        })
    }

    user = await user.findByIdAndUpdate(request.parms.id,request.body)

    response.status(200).send({
        success:true,
        user
    })


}