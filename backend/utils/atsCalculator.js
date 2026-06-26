const calculateATS = (resumeText) => {
  const skills = [
    "react",
    "node",
    "express",
    "mongodb",
    "javascript",
    "html",
    "css",
    "git",
    "github",
    "docker",
    "aws",
  ];

  const detectedSkills = [];

  let score = 0;

  skills.forEach((skill) => {
    if (
      resumeText
        .toLowerCase()
        .includes(skill)
    ) {
      detectedSkills.push(skill);
      score += 8;
    }
  });

  if (score > 100) {
    score = 100;
  }

  const suggestions = [];

  if (!detectedSkills.includes("docker")) {
    suggestions.push(
      "Add Docker skills"
    );
  }

  if (!detectedSkills.includes("aws")) {
    suggestions.push(
      "Add AWS experience"
    );
  }

  if (
    !resumeText
      .toLowerCase()
      .includes("project")
  ) {
    suggestions.push(
      "Add project details"
    );
  }

  return {
    score,
    detectedSkills,
    suggestions,
  };
};

module.exports = calculateATS;