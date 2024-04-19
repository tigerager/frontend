import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {useFormik} from 'formik';
import 'react-toastify/dist/ReactToastify.css';
import './createproduk.scss';
import { Context } from './context/UserContext';

const Login = () => {
    const { dispatch } = useContext(Context);
    const formik = useFormik({
        initialValues: { 
            username: "",
            password: "",
         },
         onSubmit: (data) => {
            axios.post('http://localhost:3001/users/login', data).then((response) => {
                if(response.data === "User Doesn't Exist" || response.data === "Wrong username and password combination"){
                    toast.error(response.data, {autoClose:false, onClose: ()=>{window.location.reload()}});
                }else{
                    dispatch({
                        type: 'ADD_TOKEN',                  //login teraman menggunakan context dengan konsekuensi setiap reload akan menghilangkan sesi
                        setToken: response.data.token,
                    }
                    ); 
                    toast.success("WELCOME", {onClose: ()=>{window.location.reload()}});
                    axios.get(`http://localhost:3001/users/setTokenhttponly/${response.data.id}`, {withCredentials: true}).then((res)=>{
                    //catatan kalau untuk menset cookie harus pakai method get
                })
                }
         })
        .catch((err) => {
            toast.error(err, {autoClose:false})
        });
         }
        });
  return (
 
        //login form
        <div className='createproduk'>
            <form onSubmit={formik.handleSubmit} className='userCreateContainer' >
            <ToastContainer style={{ top: '-18px', width: "22%" }} className='toast' />
                <input onChange={formik.handleChange} value={formik.values.username} className='inputUserCreate' name="username" type='text' placeholder='Username' />
                <input onChange={formik.handleChange} value={formik.values.password} className='inputUserCreate' name="password" type='password' placeholder='Password' />
                <button type='submit' style={{ position: 'relative', marginTop: '50px', width: '97%', height: '35px' }} className='inputUserCreate' >Login</button>
            </form>
    </div>

  )
}

export default Login