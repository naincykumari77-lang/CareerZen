const pdf = require("pdf-parse");

const Analysis = require("../models/Analysis");

const calculateATS = require("../utils/atsCalculator");

const analyzeResume = async (req, res) => {
  try {
    console.log("Inside analyzeResume");

    let data;

try {
  data = await pdf(req.file.buffer);
} catch (err) {
  return res.status(400).json({
    success: false,
    message: "Invalid or unsupported PDF file",
  });
}

    console.log("PDF parsed successfully");

    const resumeText = data.text;

    const result = calculateATS(resumeText);

    const analysis = await Analysis.create({
      userId: req.user.id,
      atsScore: result.score,
      detectedSkills: result.detectedSkills,
      suggestions: result.suggestions,
      resumeText,
    });

    res.status(200).json({
      success: true,
      analysis,
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAnalysis = async (req, res) => {
  try {
    const analysis = await Analysis.findOne({
      userId: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      analysis,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeResume,
  getAnalysis,
};