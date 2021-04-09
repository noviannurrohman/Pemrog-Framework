import React, { Component } from 'react'

import dp from '../img/dp.JPG'

export default class About extends Component {
    render() {
    return (
        <div className="text-center">
            <img src={dp} width="20%" alt="profil" className="my-5 rounded-circle"></img>
            <h1>Novian Nurrohman</h1>
            <h3>TI-3H / 17 / 1841720095</h3>
        </div>
    )
    }
}
