import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './produk.scss';
import { Link } from 'react-router-dom';

const Produk = () => {
    const [produks, setProduks] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/produks').then((response)=>{
        setProduks(response.data);
    });
    }, []);
  return (
    <div className='produk'>
        <h1>Pilihan Produk</h1>
        <Link className='btnCreateProduk' to='/produk/createProduk'>Masukkan Produk</Link>
        <div className='produkContainer'> 
        {produks.map((value, key)=>{
            return (
                <>
                <div className='gambarContainer'>
                    <img className='gambarProduk' src={'http://localhost:3001/'+value.gambar} alt=''/>
                    <div className='keteranganProduk'>
                        <div className='keteranganContainer'>
                            <h3>Tipe:{" "+value.tipe_produk}</h3>
                        </div>
                        <div className='keteranganContainer'>
                            <h3>Nama: {" " +value.nama_produk}</h3>
                        </div>
                        <div className='keteranganContainer'>
                            <h3>Jumlah:{" "+value.jumlah}</h3>
                        </div>
                    </div>
                </div>
                </>
            )
        })}
        </div>
    </div>
  )
}

export default Produk