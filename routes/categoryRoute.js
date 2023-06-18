import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddle.js";
import { createCategoryController, updateCategoryController,  deleteCategoryCOntroller,
    singleCategoryController, categoryControlller, } from "../controller/CategoryController.js";


const router = express.Router();

//routes
// create category
router.post(
    "/create-category",
    requireSignIn,
    isAdmin,
    createCategoryController
);


// update
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController)


// get 

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryCOntroller
);

export default router;