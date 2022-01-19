import React, { useState, useEffect } from 'react';
import axios from 'axios';

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