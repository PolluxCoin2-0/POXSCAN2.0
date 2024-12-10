const CodeEditor = () => {
  return (
    <div
    style={{
      position: "relative",
      width: "100%",
      height: "600px",
      background: "", // Custom background
      borderRadius: "15px", // Rounded corners
      overflow: "hidden", // Prevent content overflow
    }}
    >
      <iframe
        src="https://ethfiddle.com/services/iframesnippet/ozceJJl0e9"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "absolute",
          border: "0",

        }}
        allowFullScreen
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default CodeEditor;
