import "./Tag.css";

const Tag = ({ color, children }) => {
  const tagStyle = {
    backgroundColor: color,
  };

  return (
    <div className="custom-tag" style={tagStyle}>
      {children}
    </div>
  );
};

export default Tag;
