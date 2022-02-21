const express = require("express");
const routers = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const uploadSingleValidation = require("../middleware/singleUploadMiddleware");
const uploadMultiValidation = require("../middleware/MultiUploadMiddleware");
const {createUser} = require("../controller/userController")
// routers.use(authMiddleware)

routers.post('/user/create', createUser)

module.exports = routers;
