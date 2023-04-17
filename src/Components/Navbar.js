import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid d-flex">
  <img src={'./images/Brand.png'} alt="Project Blaze" width="150" />
    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>

<div className="offcanvas offcanvas-start" tabindex="-1" id="sidebar" aria-labelledby="sidebarLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="sidebarLabel">Menu</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="/">Action</a></li>
          <li><a className="dropdown-item" href="/">Another action</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="/">Something else here</a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</div>
</nav>

  )
}

export default Navbar
