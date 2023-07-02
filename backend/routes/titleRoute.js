const express = require("express")
const { getAlluserDetails } = require("../controllers/titleController")

const router = express.Router()


router.route("/getDetails").get(getAlluserDetails)



module.exports = router