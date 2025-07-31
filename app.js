import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";


// JSX => Babel transpile i

const Jsxheading = ()=> (<h1 className="head" tabIndex="1">Namasthe react using jsx

</h1>);


// React component
// class based component - old
// functional component - new



//  component composition
const HeadingComponent = ()=>(
  <div> 
    <Jsxheading />
    <h1>Namasthe React Functional Component</h1>
  </div>
);





const value = 10000;




const First = function() {
  return(
  <div className="first">
    <h1>This is the first component</h1>
    <p>are you enjoy your study</p>
  </div>
);
}


const Second = ()=> (
  <div className="second">
    <h2>{value}</h2>
    <First />
    <h1>This is the second component</h1>
    <p>it working component composition</p>
  </div>
);


















const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Second />);

