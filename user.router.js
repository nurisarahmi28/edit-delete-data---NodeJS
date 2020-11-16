const{
    controllerUpdateUser,
    controllerDeleteUser } = require("./user.controller");
    
    const router = require("express").Router();
    
    router.patch("/patch", controllerUpdateUser);
    router.delete("/delete",controllerDeleteUser)

    module.exports = router;