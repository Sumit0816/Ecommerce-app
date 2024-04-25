import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { RequireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// Routing
// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

// test routes
router.get("/test", RequireSignIn, isAdmin, testController);

// protected route for user auth
router.get("/user-auth", RequireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected route for admin
router.get("/admin-auth", RequireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update profile
router.put("/profile", RequireSignIn, updateProfileController);

// orders
router.get("/orders", RequireSignIn, getOrdersController);

// all orders
router.get("/all-orders", RequireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  RequireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
