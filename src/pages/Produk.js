import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import './produk.scss';
import { Link } from 'react-router-dom';
import { Context } from './context/UserContext';

const Produk = () => {
    //const [produks, setProduks] = useState([]);
    const {cek} = useContext(Context);
    let [products, setProducts] = useState([]);
    useEffect(()=>{
        //lakukan pengecekan status apakah token ada atau tidak ada

        if(cek !== "tidak ada"){
            axios.get('http://localhost:3001/produks', {
                headers: {
                    token: cek
                }}).then((response)=>{  //menyambungkan ke backend
                    if(response.data !== "User not logged in"){
                        setProducts(response.data);
                    }
            
    //     axios.get('https://dummyjson.com/products').then((response)=>{ => ini fake api
    //   setProducts(response.data);
        });   
        }
    }, [cek]);
  return (
    <div className='produk'>
        <h1>Pilihan Produk</h1>
        <Link className='btnCreateProduk' to={cek !== "tidak ada" ? '/createProduk' : '/login'}>Masukkan Produk</Link>
        <div className='produkContainer'>
        {products? 
                products.map((value, key)=>{
                    return (
                        <div key={key} className='gambarContainer'>
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
                    )
                }) : "Produk Tidak Ada"
            }
            {/* {products.products ? 
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
            }    */}
        </div>
    </div>
  )
}

export default Produk