// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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


<Navbar title="TextUtils"/>    
{/* for passing multi value in props
<Navbar title="TextUtils" AboutText="abour text"/> dont use ',' 

*/}
  
  <div className="container">
    
  <TextForm title="Enter text to analyze"/>

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

