const express = require("express");
const router = express.Router();

const{ensureAuthenticated, addUserData}=require(".. /middlewares/auth.middleware");

const{getMO,postMO,getMOlist,deleteMO}=require("./../controllers/mathOlympiad.controllers");

router.get("/register",ensureAuthenticated,addUserData,getMO);
router.post("/register",ensureAuthenticated,addUserData,postMO);
router.get("/list",ensureAuthenticated,addUserData,getMOlist);
router.get("/delete/:id",ensureAuthenticated,addUserData,deleteMO);

module.exports=router;
