import "./Container.css";

function Container({ children, width, ...props }) {
  return (
    <div className="Container" style={{ maxWidth: { width } }}>
      {children}
    </div>
  );
}

export default Container;
