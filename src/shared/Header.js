/* eslint-disable   jsx-a11y/anchor-is-valid */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({username, usertype, isAuth, logout}) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark blue-green">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <form className="d-flex">
            <input className="form-control me-2 navbar-search" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-search btn-outline-success" type="submit">Search</button>
          </form> */}
          {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/roofWash" className="dropdown-item">
                    Roof Wash
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to="/houseWash">
                    House Wash
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to="/softWash">
                    Soft Wash
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link  className="dropdown-item" to="/surfaceWash">
                    Surface Wash
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
            </li>
            {!isAuth && 
              <React.Fragment>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/register">Register</Link>
                </li>
              </React.Fragment>
            }
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/blog/difference">Blog</Link>
            </li>
            { isAuth &&
              <React.Fragment>
                <li className="nav-item">
                  <div className="nav-link" onClick={logout}>
                    Logout
                  </div>
                </li>
              </React.Fragment>
            }
            {/* {usertype === 'admin' && isAuth &&
            <React.Fragment>
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/page/create">
                Add Page
              </Link>
              </li>            
            </React.Fragment>
            } */}
            {usertype === 'admin' && isAuth &&
            <React.Fragment>
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/job/admin">
                Jobs
              </Link>
              </li>            
            </React.Fragment>
            }
            {usertype === 'tech' && isAuth &&
            <React.Fragment>
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/job/tech">
                Jobs
              </Link>
              </li>            
            </React.Fragment>
            }
            <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/appointment">
                  Appointment                  
                </Link>
              </li>
            { isAuth &&
              <React.Fragment>    
                <li className="nav-item welcome-msg">
                  <div className="nav-link"> 
                    Welcome {username}
                  </div>
                </li>
              </React.Fragment>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = ({auth: {username, usertype, isAuth}}) => {
    return {
      username,
      usertype,
      isAuth
    }
  }

export default connect(mapStateToProps)(Header);