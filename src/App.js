// import logo from './logo.svg';
import './App.css';

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

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


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

