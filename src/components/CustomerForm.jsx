import React, { useState,useContext } from 'react';
import { CustomerContext } from '../contexts/customer';
import './style.css';
const CustomerForm=()=>{

  const {submit} =useContext(CustomerContext)


  const [name,setName] =useState('');
  const [email,setEmail]=useState('');

  
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    console.log('dados',{name,email});

    submit({name,email})
  }


  return (
    <div className='form'>
     <form onSubmit={handleSubmit}>
        <label htmlfor='name'> Nome:</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} name='name' id='name'/>
        <label htmlFor='email'>Email</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} name='email' id='email'/>
        <button type='submit' >Enviar</button>
      </form>
    </div>
  )
}

export default CustomerForm;