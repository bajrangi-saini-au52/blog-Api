const sendToken = (user,statusCode,response)=>{

    const token = user.getJWTToken()

    // option for cookie
    const option = {
        expires:new Date(
            Date.now() + process.env.COOKIE_EXPIRE *24*60*60*1000
        ),
        httpOnly:true
    };
    response.status(statusCode).cookie('token',token,option).send({
        success:true,
        token,
        user
    })
}

module.exports = sendToken