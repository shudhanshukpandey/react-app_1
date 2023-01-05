// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import {                         //href alternative for react
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// let value="jai bhawani"
function App() {
  const [mode, setMode] = useState("light"); //tels whether dark mode is enablaled or not
  const toggleMode = () => {
    //making a function for toggle mode
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "pink";
      // document.title="can change title"
      showAlert("dark  Mode Enabled", "success");
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      {/* <div className="first">lovely</div>

    <nav>
      <li>Home</li>
      <li>about</li>
      <li>contact</li>
    </nav>
    <div className="container">
      <h1>hello {value}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro nobis neque laudantium repudiandae cum in, obcaecati mollitia sapiente deleniti provident vitae hic soluta et, iste voluptatum fugiat quo explicabo?
      </p>
    </div> */}

      <div className="container0">
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* passing function as props */}
        <Alert alert={alert} />
      </div>

      {/* for passing multi value in props
<Navbar title="TextUtils" AboutText="abour text"/> dont use ',' 

*/}

      <div className="container my-3">
        {/* <TextForm title="Enter text to analyze" showAlert={showAlert} /> */}
        {/* <About /> */}
        Switch has been replaced with routes here's the code 
        {/* template for href alternative */}
        {/* <Router> */}
          <Routes>
            <Route exact path="/" element={<TextForm />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        {/* </Router> */}
        
        
      </div>
    </>
  );
}

export default App;

// things inside return will be between parenthesis(); y? because because react dom takes only one tag if
// multiple tag are neaded use empty tag(<> remaining tags </>) and add all the remaining tag
// most of the times only return value is changed
//jsx is syntax extension of js through wich we can write html js?
//for error (no closing tag) use "/" at the end eg <input/>
//class= changed to className=, href="#" changed to href="/"

//module1
// let a="data";
// let b="data2";

// export default a;
// export {b}  ['{}' are used if default export is not used]

// module2

// import a, {b} from './module1.extension' [a can written as anything as it is default export as for b or similar exports
// it has to be the same name and inside '{}']
// console.log(a)
// console.log(b)
