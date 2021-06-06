import React, { Component } from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";

import About from "../components/About";
import Home from "../components/Home";
import Product from "../components/Product";
import Admin from "../components/Admin";
import Admin2 from "../components/Admin2";

class Main extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
    };

  state = {
   isOpen: false
  };
  
  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ⚗ Toko Nopian
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          Admin
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <Link to="/admin">
          <a className="dropdown-item" href="/admin">
            Mesin Cuci Top Loading
          </a>
          </Link>
          <Link to="/admin2">
          <a className="dropdown-item" href="/admin2">
            Mesin Cuci Front Loading
          </a>
          </Link>
        </div>
      </div>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
            <button className="btn btn-dark" onClick={this.handleLogout}>
              Log out
               </button>
            </form>
          </div>
        </div>
      </nav>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/admin2">
            <Admin2 />
          </Route>
        </Switch>
        <footer className="page-footer font-small blue"></footer>
      </div>
    </Router>
  );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
  };
}
 
 export default connect(mapStateToProps)(Main);
