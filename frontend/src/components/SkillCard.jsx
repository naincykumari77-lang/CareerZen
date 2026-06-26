const SkillCard = ({ title, skills }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <h3>{title}</h3>

      <div>
        {skills.map((skill, index) => (
          <span
            key={index}
            style={{
              margin: "5px",
              padding: "6px 12px",
              background: "#e0e7ff",
              display: "inline-block",
              borderRadius: "20px"
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;