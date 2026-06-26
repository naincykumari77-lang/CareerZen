const Resume = require("../models/Resume");

const uploadResume = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Resume Upload API Ready",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadResume,
};