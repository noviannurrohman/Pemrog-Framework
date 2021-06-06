import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
    return (
<div className="container">
<div className="row align-items-center">
  <div className="col-auto pr-5" style={{ width: 530 }}>
    <h1 className="line-height-1 mt-5 mb-3">
      Selamat Datang di <br />
      Toko Mesin Cuci -<br />
      Nopian
    </h1>
    <p
      className="mb-4 font-weight-light w-75"
      style={{ lineHeight: "170%" }}
    >
      Murah tapi berkualitas? <br /> Disini solusinya.. 😉
    </p>
    <Link className="nav-link" to="/product">
            <button className="btn btn-dark">Go to product</button>
          </Link>
  </div>

  <div className="col-6 pl-5">
    <div style={{ width: 520, height: 250 }}>
      <img
        src="https://d2pa5gi5n2e1an.cloudfront.net/webp/id/images/article/11371_ID/summary.jpg"
        alt="Rice"
        className="img-fluid position-absolute"
        style={{ margin: "-30px 0 0 -30px" }}
      />
    </div>
  </div>
</div>
</div>
      );
    }
}
