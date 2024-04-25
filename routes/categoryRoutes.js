import express from "express";
import { RequireSignIn, isAdmin } from "./../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

// routes
// create category
router.post(
  "/create-category",
  RequireSignIn,
  isAdmin,
  createCategoryController
);

// update category
router.put(
  "/update-category/:id",
  RequireSignIn,
  isAdmin,
  updateCategoryController
);

// getAll category
router.get("/get-category", categoryController);

// single category
router.get("/single-category/:slug", singleCategoryController);

// delete category
router.delete(
  "/delete-category/:id",
  RequireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
