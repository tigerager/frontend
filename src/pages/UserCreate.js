import React from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './createproduk.scss';

function UserCreate() {
    const formik = useFormik({
        initialValues: { 
            username: "",
            password: "",
         },
         onSubmit: (data) => {
            axios.post('http://localhost:3001/users/register', data).then((response) => {
                toast.success(response.data, {autoClose:false, onClose: ()=>{window.location.reload()}})
         })
        .catch((err) => {
            toast.error(err, {autoClose:false})
        });
         }
        });

  return (
    <div className='createproduk'>
            <form onSubmit={formik.handleSubmit} className='userCreateContainer' >
            <ToastContainer className='toast' />
                <input onChange={formik.handleChange} value={formik.values.username} className='inputUserCreate' name="username" type='text' placeholder='Username' />
                <input onChange={formik.handleChange} value={formik.values.password} className='inputUserCreate' name="password" type='password' placeholder='Password' />
                <button type='submit' style={{ position: 'relative', marginTop: '50px', width: '97%', height: '35px' }} className='inputUserCreate' >Register</button>
            </form>
    </div>
  )
}

export default UserCreate;