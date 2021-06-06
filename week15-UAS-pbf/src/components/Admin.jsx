import React, { Component } from 'react';
import Post from "../pages/Post";
import firebase from 'firebase';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // komponen state dari React untuk statefull component
      listProduct: [], // variabel array yang digunakan untuk menyimpan data Firebase
    };
  }

  ambilDataDariServerFirebase = () => {
    // fungsi untuk mengambil data Firebase dari Realtime Database Firebase
    let ref = firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  simpanDataKeServerFirebase = () => {
    // fungsi untuk mengirim/insert data Firebase dari Realtime Database Firebase
    firebase.database().ref("/").set(this.state);
  };

  componentDidMount() {
    // komponen untuk mengecek ketika component telah dimounting, maka panggil Firebase
    this.ambilDataDariServerFirebase(); // ambil data dari server Firebase lokal
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.simpanDataKeServerFirebase();
    }
  }

  handleHapusProduct = (idProduct) => {
    // fungsi yang meng-handle button action hapus data
    const { listProduct } = this.state;
    const newState = listProduct.filter((data) => {
      return data.id !== idProduct;
    });
    this.setState({ listProduct: newState });
  };

  handleTombolSimpan = (event) => {
    // fungsi untuk meng-handle saat button action diklik (simpan data)
    let nama = this.refs.namaProduct.value; // this.refs mengacu pada input field (input text, textarea, number, dll)
    let gambar = this.refs.gambarProduct.value;
    let harga = this.refs.hargaProduct.value;
    let id = this.refs.id.value;

    if (id && nama && gambar && harga) {
      // cek apakah semua data memiliki nilai (tidak null)
      const { listProduct } = this.state;
      const indeksProduct = listProduct.findIndex((data) => {
        return data.id === id;
      });
      listProduct[indeksProduct].nama = nama;
      listProduct[indeksProduct].gambar = gambar;
      listProduct[indeksProduct].harga = harga;
      this.setState({ listProduct });
    } else if (nama && gambar && harga) {
      // jika data belum di server
      const id = new Date().getTime().toString();
      const { listProduct } = this.state;
      listProduct.push({ id, nama, gambar, harga });
      this.setState({ listProduct });
      alert("berhasil ditambahkan");
    }

    this.refs.namaProduct.value = "";
    this.refs.gambarProduct.value = "";
    this.refs.hargaProduct.value = "";
    this.refs.id.value = "";
  };

  render() {
    return (
      <div className="post-product">
        <div className="form pb-3 border-bottom">
          <div className="form-gorup row">
            <label htmlFor="nama" className="col-sm-2 col-form-label">
              Nama Product
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="nama"
                name="nama"
                ref="namaProduct"
              />
            </div>
          </div>
          <div className="form-group row my-3">
            <label htmlFor="gambar" className="col-sm-2 col-form-label">
              Link Gambar
            </label>
            <div className="col-sm-10">
              <textarea
                name="gambar"
                id="gambar"
                rows="3"
                className="form-control"
                ref="gambarProduct"
              ></textarea>
            </div>
          </div>
          <div className="form-gorup row">
            <label htmlFor="harga" className="col-sm-2 col-form-label">
              Harga Product
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="harga"
                name="harga"
                ref="hargaProduct"
              />
            </div>
          </div>
          <input type="hidden" name="id" ref="id" />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </button>
        </div>
      <h2 className="text-center my-5">Data Produk Top Loading</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nama</th>
                <th scope="col">Link Gambar</th>
                <th scope="col">Harga</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listProduct.map((product) => {
                return (
                  <Post
                  key={product.id}
                  nama={product.nama}
                  gambar={product.gambar}
                  harga={product.harga}
                  hapusProduct={() => this.handleHapusProduct(product.id)}
                />
                );
              })}
            </tbody>
          </table>
        </div>
        </div>
    );
  }
}
