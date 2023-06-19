import React from 'react'

const Lower = ({data}) => {
  return (
    <div>
        <h2>{data.nombre}</h2>
        <img src={data.img} alt="img" />
        <span>{data.price}</span>
    </div>
  )
}

export default Lower