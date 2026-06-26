const InterviewCard = ({ question }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "10px"
      }}
    >
      <p>{question}</p>
    </div>
  );
};

export default InterviewCard;