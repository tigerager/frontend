import React, { useState } from 'react';
import './createproduk.scss';
import {useFormik} from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CreateProduk = () => {
    const [file, setFile] = useState();
    const formik = useFormik({
        initialValues: { 
            tipe_produk: "",
            nama_produk: "",
            jumlah: 1
         },
         onSubmit: (data) => {
            const formData = new FormData();
            formData.append("category", data.tipe_produk);
            formData.append("title", data.nama_produk);
            formData.append("stock", data.jumlah);
            formData.append("gambar", ["test.png", file.name]);
        //    formData.append("gambar", file)
        //     axios.post('http://localhost:3001/produks/registerProduk', formData).then((response) => {
        //         toast.success(response.data, {autoClose:false, onClose: ()=>{window.location.reload()}})
        //  })
        // .catch((err) => {
        //     toast.error(err, {autoClose:false})
        // });   ///for connecting to backend
        axios.post('https://dummyjson.com/products/add', {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: formData.get("title"),
              category: formData.get("category"),
              stock: formData.get("stock"),
              images: formData.get("gambar")
              /* other product data */
            })
        }).then(res => toast.success(formData.get("title").toUpperCase()+" BERHASIL DITAMBAHKAN", {autoClose:false, onClose: ()=>{window.location.reload()}}));
         }
        });
  return (
    <div className='createproduk'>
        <h1>Masukkan Produk</h1><hr style={{ opacity: '0.4', width: '80%', marginTop: '-10px', marginBottom:'40px' }}/>
        <form onSubmit={formik.handleSubmit} className='userCreateContainer' >
        <ToastContainer style={{ marginTop: "3%", marginRight: "27.5%", width: "38%" }} />
            <input onChange={formik.handleChange} value={formik.values.tipe_produk} className='inputUserCreate' name="tipe_produk" type='text' placeholder='Tipe produk' />
            <input onChange={formik.handleChange} value={formik.values.nama_produk} className='inputUserCreate' name="nama_produk" type='text' placeholder='Nama produk' />
            <input onChange={formik.handleChange} value={formik.values.jumlah} className='inputUserCreate' name="jumlah" type='number' placeholder='Jumlah produk' />
            <input accept='image/*' onChange={e=>setFile(e.currentTarget.files[0])} className='inputUserCreate' type='file' name="gambar" />
            <button type='submit' style={{ position: 'absolute', top: '470px', left: '34.5%', height: '40px' }} >Upload Produk</button>
        </form>
    </div>
  )
}

export default CreateProduk