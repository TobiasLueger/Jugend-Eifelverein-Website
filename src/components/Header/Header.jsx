import React, { useState, useEffect } from 'react';
import axios from "axios"

const Header = ({

}) => {
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
    <header className="App-header">
      <p>Wanderjugend im Eifelverein Rheinbach 🎊</p>
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
  )
}

export default Header
