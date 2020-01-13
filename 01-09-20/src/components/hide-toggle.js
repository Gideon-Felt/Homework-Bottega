//HOOKS COMPONENT
import React, { useState } from "react";

export default function HideToggle() {
  const [display, setDisplay] = useState("visible");

  function toggleHideMethod() {
    if (display === "hidden") {
      setDisplay("visible");
    } else if (display === "visible") {
      setDisplay("hidden");
    }
  }

  return (
    <div>
      <h1 className="hide" style={{ visibility: `${display}` }}>
        Hide me
      </h1>
      <button className="btn" onClick={() => toggleHideMethod()}>
        Click Me
      </button>
    </div>
  );
}



//CLASS COMPONENT
// import React, { Component } from "react";

// export default class HideToggle extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       display: "visible",
//       hideStyle: "hidden",
//       showStyle: "visible"
//     };
//     this.divStyle = {
//       visibility: this.state.display
//     };
//   }

//   toggleHideMethod = () => {
//     if (this.state.display === this.state.hideStyle) {
//       this.setState({
//         display: "visible"
//       });
//       this.divStyle = { visibility: this.state.display };
//     } else if (this.state.display === this.state.showStyle) {
//       this.setState({
//         display: "hidden"
//       });
//       this.divStyle = { visibility: this.state.display };
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1 className="hide" style={this.divStyle}>
//           Hide me
//         </h1>
//         <button className="btn" onClick={this.toggleHideMethod}>
//           Click Me
//         </button>
//       </div>
//     );
//   }
// }
