const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    atsScore: {
      type: Number,
      default: 0,
    },

    detectedSkills: [String],

    suggestions: [String],

    resumeText: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Analysis",
  analysisSchema
);