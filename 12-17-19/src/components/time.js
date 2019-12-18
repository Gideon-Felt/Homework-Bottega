import React from "react";

const CurrentDate = () => {
  return (
    <div>
      <h1>
        {new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString()}
      </h1>
    </div>
  );
};

export default CurrentDate;
