import React, { useState, useEffect } from 'react';
import logo from './logo.svg'
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState({ data: [], meta: {} })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:1337/api/pages?populate=*',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <ul>
            {data.data.map(({attributes, id}) => (
                <li key={id} class={id}>
                  <a href={attributes.slug}>{attributes.title}</a>
                </li>
            ))}
          </ul>
        </p>
        
      </header>
      <main>
        
      </main>
    </div>
  )
}

export default App