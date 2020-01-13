//HOOKS COMPONENT
import React, { useState } from "react";

export default function ColorChanger() {
  const [activeColor, setActiveColor] = useState("black");
  const [colorInput, setColorInput] = useState("");

  return (
    <div>
      <div style={{ height: "10vh" }}>
        <h1 style={{ color: activeColor }}>{activeColor}</h1>
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        onSubmit={event => {
          event.preventDefault();
          setActiveColor(colorInput);
          setColorInput("");
        }}
      >
        <input
          className="inputBox"
          type="text"
          placeholder="type a color"
          value={colorInput}
          onChange={event => setColorInput(event.target.value)}
        />
        <button className="btn" type="submit">
          Pick Color
        </button>
      </form>
    </div>
  );
}


//CLASS COMPONENT
// import React, { Component } from "react";

// export default class ColorChanger extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       activeColor: "black",
//       colorInput: ""
//     };
//   }

//   submitHnadler = event => {
//     event.preventDefault();
//     this.setState({
//       activeColor: this.state.colorInput,
//       colorInput: ""
//     });
//   };

//   handleChange = event => {
//     this.setState({
//       colorInput: event.target.value
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div style={{ height: "10vh" }}>
//           <h1 style={{ color: this.state.activeColor }}>
//             {this.state.activeColor}
//           </h1>
//         </div>
//         <form
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center"
//           }}
//           onSubmit={this.submitHnadler}
//         >
//           <input
//             className="inputBox"
//             type="text"
//             placeholder="type a color"
//             value={this.state.colorInput}
//             onChange={this.handleChange}
//           />
//           <button className="btn" type="submit">
//             Pick Color
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
