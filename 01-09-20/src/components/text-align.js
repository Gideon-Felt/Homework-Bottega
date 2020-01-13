//HOOKS COMPONENT
import React, { useState } from "react";

export default function TextAlign() {
  const [display, setDisplay] = useState("center");

  function setTextPostition(position) {
    if (position === "left") {
      setDisplay("left");
    } else if (position === "center") {
      setDisplay("center");
    } else if (position === "right") {
      setDisplay("right");
    }
  }

  return (
    <div>
      <div style={{ textAlign: `${display}` }}>
        <h1>{display.toUpperCase()}</h1>
      </div>
      <div />
      <button className="btn multi" onClick={() => setTextPostition("left")}>
        Left
      </button>
      <button className="btn multi" onClick={() => setTextPostition("center")}>
        Center
      </button>
      <button className="btn multi" onClick={() => setTextPostition("right")}>
        Right
      </button>
    </div>
  );
}



//CLASS COMPONENT
// import React, { Component } from "react";

// export default class TextAlign extends Component {
//   constructor(props) {
//     super();

//     this.state = {
//       display: "center"
//     };
//   }

//   setTextPostition = position => {
//     if (position === "left") {
//       this.setState({
//         display: "left"
//       });
//     } else if (position === "center") {
//       this.setState({
//         display: "center"
//       });
//     } else if (position === "right") {
//       this.setState({
//         display: "right"
//       });
//     }
//   };

//   render() {
//     return (
//       <div>
//         <div style={{ textAlign: `${this.state.display}` }}>
//           <h1>{this.state.display.toUpperCase()}</h1>
//         </div>
//         <div />
//         <button
//           className="btn multi"
//           onClick={() => this.setTextPostition("left")}
//         >
//           Left
//         </button>
//         <button
//           className="btn multi"
//           onClick={() => this.setTextPostition("center")}
//         >
//           Center
//         </button>
//         <button
//           className="btn multi"
//           onClick={() => this.setTextPostition("right")}
//         >
//           Right
//         </button>
//       </div>
//     );
//   }
// }
