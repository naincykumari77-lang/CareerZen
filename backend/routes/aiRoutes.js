const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const multer =
  require("multer");

const upload = multer();

const {
  analyzeResume,
  getAnalysis,
} = require(
  "../controllers/aiController"
);

router.post(
  "/analyze",
  protect,
  upload.single("resume"),
  analyzeResume
);

router.get(
  "/latest",
  protect,
  getAnalysis
);

module.exports = router;