import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './produk.scss';
import { Link } from 'react-router-dom';

const Produk = () => {
    //const [produks, setProduks] = useState([]);
    let [products, setProducts] = useState([]);
    useEffect(()=>{
        // axios.get('http://localhost:3001/produks').then((response)=>{  //menyambungkan ke backend
        // setProduks(response.data);
        axios.get('https://dummyjson.com/products').then((response)=>{
      setProducts(response.data);
    })
    }, []);
  return (
    <div className='produk'>
        <h1>Pilihan Produk</h1>
        <Link className='btnCreateProduk' to='/createProduk'>Masukkan Produk</Link>
        <div className='produkContainer'>
            {products.products ? 
                products.products.map((value, key)=>{
                    return (
                        <div className='gambarContainer'>
                            <img className='gambarProduk' src={value.images[0]} alt=''/>
                            <div className='keteranganProduk'>
                                <div className='keteranganContainer'>
                                    <h3>Tipe:{" "+value.category}</h3>
                                </div>
                                <div className='keteranganContainer'>
                                    <h3>Nama: {" " +value.title}</h3>
                                </div>
                                <div className='keteranganContainer'>
                                    <h3>Jumlah:{" "+value.stock}</h3>
                                </div>
                            </div>
                        </div>  
                    )
                }) : "Produk Tidak Ada"
            }   
        </div>
    </div>
  )
}

export default Produk