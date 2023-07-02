const title = require("../models/titleModel")


exports.getAlluserDetails = async(request,response)=>{

    let Title = await title.findById(request.parms.id)

    if(!Title){
        return response.status(500).send({
            success:true,
            message:"title not found"
        })
    }
}