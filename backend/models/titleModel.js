const {Schema,model} = require("mongoose")


const userTitle = new Schema({

    title:{
        type:String,
        required:true,
        unique:true,
        maxlength:6
    },
    description:[
        {
            rating:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            },
            createdAt:{
                type:String,
                default:Date.now()
            },
            aboutMovie:{
                type:String,
                required:true,
                name:{
                    type:String,
                    required:true,
                }
            }
        }
    ],
    content:[
        {
            name:{
                type:String,
                required:true
            },
            createdAt:{
                type:String,
                default:Date.now()
            }
        }
    ]
})

const title = model('title',userTitle)

module.exports = title