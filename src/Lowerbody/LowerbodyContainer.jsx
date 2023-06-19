import React from 'react';
import { useState, useEffect } from 'react';
import LowerItem from '../LowerItem/LowerItem';

// el componente container lo que hace en pedir los datos.
const LowerbodyContainer = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch('../data.json')
        .then(res => res.json())
        .then(response => setData(response))
    },[])

  return (
    <div>   
        <LowerItem data={data}/>
    </div>
  )
}

export default LowerbodyContainer