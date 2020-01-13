//HOOKS COMPONENT
import React, { useState, useEffect } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(
    String(new Date().toLocaleTimeString())
  );

  useEffect(() => {
    const liveTime = setInterval(() => {
      setCurrentTime(String(new Date().toLocaleTimeString()));
    });

    return () => {
      clearInterval(liveTime);
    };
  });

  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  );
}


//CLASS COMPONENT
// import React, { Component } from "react";

// export default class Clock extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       currentTime: String(new Date().toLocaleTimeString())
//     };
//   }

//   componentDidMount() {
//     this.liveTime = setInterval(() => {
//       this.setState({ currentTime: String(new Date().toLocaleTimeString()) });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.liveTime);
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.currentTime}</h1>
//       </div>
//     );
//   }
// }
