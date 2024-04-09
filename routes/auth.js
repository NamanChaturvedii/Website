import express from "express";
import { registerController,loginController,getAllUsersController,testController,forgotPasswordController ,updateProfileController,getOrdersController,getAllOrdersController, orderStatusController} from "../controller/authControl.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddle.js";

// costn

const router= express.Router()


router.post("/register",registerController)
router.post("/login",loginController)
router.post("/forgot-password", forgotPasswordController);
router.get("/test",requireSignIn,isAdmin,testController)

// private

router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})              // if ok is true then only it will work
})


router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})              // if ok is true then only it will work
})

// update profile 
router.put("/profile",requireSignIn,updateProfileController)

// orders
router.get("/orders",requireSignIn,getOrdersController)



router.get("/all-orders",requireSignIn,isAdmin,getAllOrdersController)



router.get("/order-status",requireSignIn,isAdmin,orderStatusController)

router.get("/get-all-users",requireSignIn,isAdmin,getAllUsersController)


export default router;