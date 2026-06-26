const ResumeSuggestions = ({ suggestions }) => {
  return (
    <div>
      <h2>AI Resume Suggestions</h2>

      {suggestions.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeSuggestions;