import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './produk.scss';
import { Link } from 'react-router-dom';

const Produk = () => {
    //const [produks, setProduks] = useState([]);
    let [products, setProducts] = useState([]);
    let [products1, setProducts1] = useState([]);
    let [products2, setProducts2] = useState([]);
    let [products3, setProducts3] = useState([]);
    let [products4, setProducts4] = useState([]);
    let [products5, setProducts5] = useState([]);
    let [products6, setProducts6] = useState([]);
    useEffect(()=>{
        // axios.get('http://localhost:3001/produks').then((response)=>{  //menyambungkan ke backend
        // setProduks(response.data);
        axios.get(`https://dummyjson.com/products/1`).then((response)=>{
        setProducts(response.data);          
        }); 
        axios.get(`https://dummyjson.com/products/2`).then((response)=>{
            setProducts1(response.data);          
        });
        axios.get(`https://dummyjson.com/products/3`).then((response)=>{
            setProducts2(response.data);          
        });
        axios.get(`https://dummyjson.com/products/4`).then((response)=>{
            setProducts3(response.data);          
        });
        axios.get(`https://dummyjson.com/products/5`).then((response)=>{
            setProducts4(response.data);          
        });
        axios.get(`https://dummyjson.com/products/6`).then((response)=>{
            setProducts5(response.data);          
        });
        axios.get(`https://dummyjson.com/products/7`).then((response)=>{
            setProducts6(response.data);          
        });
    }, []);
  return (
    <div className='produk'>
        <h1>Pilihan Produk</h1>
        <Link className='btnCreateProduk' to='/createProduk'>Masukkan Produk</Link>
        <div className='produkContainer'>   
            <div className='gambarContainer'>
                <img className='gambarProduk' src={"https://cdn.dummyjson.com/product-images/1/1.jpg"} alt=''/>
                <div className='keteranganProduk'>
                    <div className='keteranganContainer'>
                        <h3>Tipe:{" "+products['category']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Nama: {" " +products['title']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Jumlah:{" "+products['stock']}</h3>
                    </div>
                </div>
            </div>
            <div className='gambarContainer'>
                <img className='gambarProduk' src={"https://cdn.dummyjson.com/product-images/2/1.jpg"} alt=''/>
                <div className='keteranganProduk'>
                    <div className='keteranganContainer'>
                        <h3>Tipe:{" "+products1['category']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Nama: {" " +products1['title']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Jumlah:{" "+products1['stock']}</h3>
                    </div>
                </div>
            </div>
            <div className='gambarContainer'>
                <img className='gambarProduk' src={"https://cdn.dummyjson.com/product-images/3/1.jpg"} alt=''/>
                <div className='keteranganProduk'>
                    <div className='keteranganContainer'>
                        <h3>Tipe:{" "+products2['category']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Nama: {" " +products2['title']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Jumlah:{" "+products2['stock']}</h3>
                    </div>
                </div>
            </div>
            <div className='gambarContainer'>
                <img className='gambarProduk' src={"https://cdn.dummyjson.com/product-images/4/1.jpg"} alt=''/>
                <div className='keteranganProduk'>
                    <div className='keteranganContainer'>
                        <h3>Tipe:{" "+products3['category']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Nama: {" " +products3['title']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Jumlah:{" "+products3['stock']}</h3>
                    </div>
                </div>
            </div>
            <div className='gambarContainer'>
                <img className='gambarProduk' src={"https://cdn.dummyjson.com/product-images/5/1.jpg"} alt=''/>
                <div className='keteranganProduk'>
                    <div className='keteranganContainer'>
                        <h3>Tipe:{" "+products4['category']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Nama: {" " +products4['title']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Jumlah:{" "+products4['stock']}</h3>
                    </div>
                </div>
            </div>
            <div className='gambarContainer'>
                <img className='gambarProduk' src={"https://cdn.dummyjson.com/product-images/6/thumbnail.png"} alt=''/>
                <div className='keteranganProduk'>
                    <div className='keteranganContainer'>
                        <h3>Tipe:{" "+products5['category']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Nama: {" " +products5['title']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Jumlah:{" "+products5['stock']}</h3>
                    </div>
                </div>
            </div>
            <div className='gambarContainer'>
                <img className='gambarProduk' src={"https://cdn.dummyjson.com/product-images/7/1.jpg"} alt=''/>
                <div className='keteranganProduk'>
                    <div className='keteranganContainer'>
                        <h3>Tipe:{" "+products6['category']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Nama: {" " +products6['title']}</h3>
                    </div>
                    <div className='keteranganContainer'>
                        <h3>Jumlah:{" "+products6['stock']}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Produk