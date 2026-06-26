const ATSCard = ({ score }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <h3>ATS Score</h3>

      <h1
        style={{
          color: "green",
          fontSize: "40px"
        }}
      >
        {score}
      </h1>

      <p>Out of 100</p>
    </div>
  );
};

export default ATSCard;