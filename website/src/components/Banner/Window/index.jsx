import "./index.less";

function Window({ title, children, className = "" }) {
  return (
    <div className={`window ${className}`.trim()}>
      <div className="window__bar">
        <span className="window__dot" />
        <span className="window__dot" />
        <span className="window__title">{title}</span>
      </div>
      {children}
    </div>
  );
}
export default Window;