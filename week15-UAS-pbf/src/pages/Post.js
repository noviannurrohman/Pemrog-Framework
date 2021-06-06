import React from "react";

const Post = (props) => {
  return (
    <tr>
      <td className="namaProduct"> {props.nama}</td>
      <td className="gambarProduct"> {props.gambar}</td>
      <td className="hargaProduct"> {props.harga}</td>
      <td>
      <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            if (window.confirm("Apakah anda yakin menghapus product ini?"))
              props.hapusProduct(props.id);
          }}
        >
          Hapus
        </button>
      </td>
    </tr>
  );
};

export default Post;