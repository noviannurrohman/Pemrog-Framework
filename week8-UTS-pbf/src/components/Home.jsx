import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
    return (
        <div className="container-fluid">
          <h3 className="my-3">Selamat datang di Toko Nopian</h3>
          <h5 className="mb-3">Disini kami menjual beberapa mesin cuci yang bagus dan murah meriah</h5>
          <Link className="nav-link" to="/product">
            <button className="btn btn-dark">Go to product</button>
          </Link>
        </div>
      );
    }
}
