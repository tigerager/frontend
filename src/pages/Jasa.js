import React, { useEffect, useState } from 'react';
import './jasa.scss';
import axios from 'axios';

const Jasa = () => {
  let [services, setServices] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response)=>{
      setServices(response.data);
    })   
  },[]) 
  return (
    <div className='jasa'>
      <div className='jasaContainer'>
        {services ? 
          services.map(
            ((value, index) => {
              return (
                <>
                <div className='itemContainer'>
                    <div>{value.id}</div>
                    <div>{value.title}</div>

                </div>
                </>
              )
            })
          )
         : "tidak ada"}
      </div>
    </div>
  )
}

export default Jasa