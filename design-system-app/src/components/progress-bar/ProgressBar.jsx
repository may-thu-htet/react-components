import react from "react";
import "./progress-bar.css";

function ProgressBar({ value }) {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${value}%` }}></div>
    </div>
  );
}

export default ProgressBar;
