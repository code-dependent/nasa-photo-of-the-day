import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

import HeaderSection from './components/HeaderComponents/headerSection';


function App() {
  const [data, setData] = useState({})
  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=opptqQ1xCs92S667f7bcX5OH06qM3I9JKZrCvJji`)
    .then(res=>{
      setData(res.data)
    })
  },[])

  

  let today = new Date();
  const day = String(today.getDate()).padStart(2,'0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = String(today.getFullYear())

  today = `${day}/${month}/${year}`


  const appStyles = {
    display:'flex',
    justifyContent: 'center',
    color:'white',
    backgroundImage: `url(https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg)`,
    backgroundSize: 'cover',
  }

  const containerStyles = {
    backgroundImage: `url(${data.url})`,
    width:'76%',
    border: '5px solid gray',
    borderRadius:'15px'
    
  }
  const explanationSec = {
    marginTop:'53%',
    width: '70%',
    marginLeft:'auto',
    marginRight:'auto',
    // animation: 'fadeIn ease 10s'
  }
  console.log(data)

  return (
    <div className="App" style={appStyles} >
      <div className="container" style={containerStyles}>
        <header className="header">
          <h1>Astronomy Photo Of The Day</h1>
          <h2>{data.title}</h2>
          <h2>{today}</h2>
          <div className='heroImg'>
            {/* <img className='heroImg' src={data.url} ></img> */}
            </div>
        </header>
        <main style={explanationSec}>
          <p >{data.explanation}</p>
        </main>
      </div>
    </div>
  );
}

export default App;
