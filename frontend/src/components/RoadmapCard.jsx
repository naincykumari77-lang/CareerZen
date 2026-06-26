const RoadmapCard = ({ step, title }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        marginBottom: "15px",
        borderRadius: "10px"
      }}
    >
      <h3>
        Step {step}
      </h3>

      <p>{title}</p>
    </div>
  );
};

export default RoadmapCard;