const UploadBox = () => {
  return (
    <div
      style={{
        border: "2px dashed #999",
        padding: "50px",
        textAlign: "center",
        background: "#fff",
        borderRadius: "10px"
      }}
    >
      <h2>Upload Resume</h2>

      <input
        type="file"
        accept=".pdf"
      />
    </div>
  );
};

export default UploadBox;