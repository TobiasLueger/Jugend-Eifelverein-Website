import React, { useState, useEffect } from 'react';
import logo from './logo.svg'
import Header from './components/Header/Header';
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState({ data: [], meta: {} })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api2-eifeljugend.herokuapp.com/api/pages?populate=*',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <main>
        
      </main>
    </div>
  )
}

export default App