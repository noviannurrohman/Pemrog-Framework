import React, { Component } from 'react';
import firebase from 'firebase';

export default class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            listProduct: [],
            listProduct2: [],
        }
    }

    ambilDataDariFirebase = () =>{
        let ref = firebase.database().ref("/");
        ref.on ("value", (snapshot) => {
            const state = snapshot.val();
            this.setState(state);
        });
    };

    simpanDataKeFirebase = () => {
        firebase.database().ref("/").set(this.state);
    };

    componentDidMount(){
        this.ambilDataDariFirebase();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState !== this.state){
            this.simpanDataKeFirebase();
        }
    }

    listProduct() {
        return this.state.listProduct.map((product) =>{
            return(
                <div className="col-sm-4 my-3" key={product.id}>
                    <div className="card">
                        <img 
                        src={product.gambar} 
                        alt="Mesin Cuci" 
                        className="mx-auto d-block img-fluid my-3"
                        width="50%" 
                        />
                        <div className="card-block p-3">
                            <h5 className="card-title">{product.nama}</h5>
                            <h4 className="card-text text-dark font-weight-bold">Rp{product.harga}</h4>
                        </div>
                    </div>
                </div>
            )
        })
    }

    listProduct2() {
        return this.state.listProduct2.map((product2) =>{
            return(
                <div className="col-sm-4 my-3" key={product2.id}>
                    <div className="card">
                        <img 
                        src={product2.gambar} 
                        alt="Mesin Cuci" 
                        className="mx-auto d-block img-fluid my-3"
                        width="50%" 
                        />
                        <div className="card-block p-3">
                            <h5 className="card-title">{product2.nama}</h5>
                            <h4 className="card-text text-dark font-weight-bold">Rp{product2.harga}</h4>
                        </div>
                    </div>
                </div>
            )
        })
    }


    render() {
    return (
        <div className="col-lg-12">
            <div className="container">
            <h2 className="my-3">Mesin Cuci Top Loading</h2>
                <div className="row">{this.listProduct()}</div>
            <h2 className="my-3">Mesin Cuci Front Loading</h2>
                <div className="row">{this.listProduct2()}</div>
            </div>
        </div>
    )
    }
}
