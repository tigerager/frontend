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
            jumlah: null
         },
         onSubmit: (data) => {
            const formData = new FormData();
            formData.append("tipe_produk", data.tipe_produk);
            formData.append("nama_produk", data.nama_produk);
            formData.append("jumlah", data.jumlah);
            formData.append("gambar", file)
            axios.post('http://localhost:3001/produks/registerProduk', formData).then((response) => {
                toast.success(response.data, {autoClose:false, onClose: ()=>{window.location.reload()}})
         })
        .catch((err) => {
            toast.error(err, {autoClose:false})
        });
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
            <button type='submit' style={{ position: 'relative', width: '62%', height: '35px' }} className='inputUserCreate' >Upload Produk</button>
        </form>
    </div>
  )
}

export default CreateProduk