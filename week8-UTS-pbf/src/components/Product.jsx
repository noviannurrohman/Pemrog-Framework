import React, { Component } from 'react'

export default class Product extends Component {
    state = {
        listProduct: [],
    }

    ambilDataProduct = () => {
        fetch("http://localhost:3001/mesincuci")
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listProduct: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount() {
        this.ambilDataProduct()
    }

    handleGetMesinCuci = (data) => {
        fetch(`http://localhost:3001/mesincuci/${data}`, {method: 'GET'})
        .then(response => response.json())
        .then(res => {
            var dataMesinCuci = { ...this.state.insertKeranjang};
            dataMesinCuci["id"] = res["id"];
            dataMesinCuci["nama"] = res["nama"];
            dataMesinCuci["harga"] = res["harga"];
            dataMesinCuci["stok"] = res["stok"];
            dataMesinCuci["qty"] = 1;
            this.setState({
                insertKeranjang: dataMesinCuci,
            })
        })
        .then(() =>{
            this.handleCekKeranjang(data);
        })
        .then(() =>{
            this.handleTombolSimpan();
            alert("Data Berhasil Ditambahkan ke Keranjang !")
        })
    }

    handleCekKeranjang = (data) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {method:"GET"})
        .then((response) => {
            if (response.ok){
                response.json().then((res) => {
                    this.handleUpdateKeranjang(data, res);
                    this.ambilDataProduct();
                })
            }else{
                this.handleTombolSimpan();
            }
        })
    }

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {
            method:"PUT",
            headers :{
                Accept:"application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id:res["id"],
                nama:res["nama"],
                harga:res["harga"],
                stok:res["stok"],
                qty:res["qty"],
            })
        })
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then( (Response) => {
                this.ambilDataProduct();  
            });
    }

    listProduct(){
        return this.state.listProduct.map((product) =>{
            return(
                <div className="col-sm-4 my-3" key={product.id}>
                    <div className="card">
                        <img src={product.gambar} alt="Mesin Cuci" className="mx-auto d-block img-fluid my-3"/>
                        <div className="card-block p-3">
                            <h5 className="card-title">{product.nama}</h5>
                            <h4 className="card-text text-dark font-weight-bold">Rp{product.harga}</h4>
                            <p className="card-text">
                                <small className="text-muted">Stok : {product.stok}</small>
                            </p>
                            <button className="btn btn-success" onClick={() => this.handleGetMesinCuci(product.id)}>🛒 Beli</button>
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
                
                <div className="row">{this.listProduct()}</div>
            </div>
        </div>
    )
    }
}
