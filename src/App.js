import './styles.css';
import {React, useState} from 'react'
import Payment from './Routes/Payment';
import Contactus from './Routes/Contactus';
import Signup from './Routes/Signup';
import Login from './Routes/Login';
import Viacard from './Routes/Viacard';
import Send from './Routes/Send';
import Landing from './Routes/Landing';
import { Route, Routes } from 'react-router-dom';



export default function App() {
  const[Show,setShow]=useState('');
      const handleSubmit=(e)=>{
        setShow(e);
      }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/viacard" element={<Viacard/>} />
        <Route path="/send" element={<Send/>} />
        <Route path="/about" element={<Landing/>} />
      </Routes>

     {/* {Show === 'Login'? <Login onSubmit={handleSubmit} /> : <Signup  onSubmit={handleSubmit}/>*/}
  
    </div>
  
  );
}
    




