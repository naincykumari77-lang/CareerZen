const JobMatchCard = ({ match }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <h2>Job Match Score</h2>

      <h1
        style={{
          color: "#6d28d9",
          fontSize: "40px"
        }}
      >
        {match}%
      </h1>
    </div>
  );
};

export default JobMatchCard;