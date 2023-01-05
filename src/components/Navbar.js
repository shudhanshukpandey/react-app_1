import React from 'react'
import PropTypes from 'prop-types'  // importing proptypes , works like marshmellow [impt]

import {  NavLink } from 'react-router-dom'


export default function Navbar(props) {
      // giving default value to props, [props?"":""] can also be used but not recomended
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">

    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}

            
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>


          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch mx-3 text-${props.mode!=="light"?"light":"dark"}`}>  
        {/* {} will convert text as js snippet inside use "``" similar to fstring and "${}" to specify position of variable or expression */}
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
        {/* calling props passed function on click switch */}
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.prototype={
    title:PropTypes.string,
    
}

// Navbar.prototype={
//     title:PropTypes.string.isRequired,  // will git error if not title is passed or no default value found
    
// }

// will show error in console  is string not passed


Navbar.defaultProps={
    title:"set default value like this"
}