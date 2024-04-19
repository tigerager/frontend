import React, {createContext, useEffect, useReducer, useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import '../createproduk.scss';
import axios from 'axios';

export const Context = createContext(null);

const initialState = {
    token: ''   
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TOKEN':
            return {
                token: action.setToken,
                
            }


        default:
            return state;
    }

};

const UserContext = (props) => {
    const [cek, setCek] = useState('');
    const [state, dispatch] = useReducer(AppReducer, initialState);

       useEffect(()=>{
        axios.get(`http://localhost:3001/users/cek`, {withCredentials: true}).then((res)=>{
            setCek(res.data);
        });

       }, [])
       
  return (
    <Context.Provider value={{ 
        cek: cek,
        token: state.token,
        dispatch
     }}>
        {props.children}
    </Context.Provider>
  )
}

export default UserContext