import React from 'react'

const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      
    </ul>
    
  </div>

  <form className="form-inline my-2 my-lg-0">
    <div className='row'>
    <div className='col-am-3'><input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /></div>
      <div className='col-sm-3'><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></div>
    </div>
      
    </form>
</nav>
    </>
  )
}

export default Nav