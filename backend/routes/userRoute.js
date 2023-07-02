const express = require("express")
const { registerUser, loginUser, deleteUser, updateUser } = require("../controllers/userController")

const router  = express.Router()


router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/delete").delete(deleteUser)

router.route("/update").put(updateUser)



module.exports = router