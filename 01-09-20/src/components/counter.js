//HOOKS COMPONENT
import React, { useState } from "react";

export default function Counter() {
  const [currentCount, setCurrentCount] = useState(0);
  return (
    <div>
      <h1>{currentCount}</h1>
      <button
        className="btn multi"
        onClick={() => setCurrentCount(currentCount + 1)}
      >
        Add
      </button>
      <button
        className="btn multi"
        onClick={() => setCurrentCount(currentCount - 1)}
      >
        Sub
      </button>
    </div>
  );
}



//CLASS COMPONENT
// import React, { Component } from "react";

// export default class Counter extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       currentCount: 0
//     };
//   }

//   countUp = () => {
//     this.setState({
//       currentCount: (this.state.currentCount += 1)
//     });
//   };

//   countDown = () => {
//     this.setState({
//       currentCount: (this.state.currentCount -= 1)
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.state.currentCount}</h1>
//         <button className="btn multi" onClick={this.countUp}>
//           Add
//         </button>
//         <button className="btn multi" onClick={this.countDown}>
//           Sub
//         </button>
//       </div>
//     );
//   }
// }
