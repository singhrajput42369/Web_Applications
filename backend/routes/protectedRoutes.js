import express from "express";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/dashboard", protect, (req, res) => {
  res.json({
    message: "Welcome to dashboard",
    name: req.user.name   
  });
});

export default router;

