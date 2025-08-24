function Button({ text, width, link }) {
  return (
    <button
      className="text-xl bg-sanAndresBg"
      type="button"
      style={{
        height: "50px",
        width: width,
        borderRadius: "50px",
      }}
    >
      <a href={`${link}`} target="_blank" rel="noopener">{text}</a>
    </button>
  );
}

export default Button;
