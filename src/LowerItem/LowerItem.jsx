import React from 'react'
import Lower from '../Lower/Lower'
const LowerItem = ({data}) => {
  return (
    <div>
        {
            data.map((data)=> (
                <Lower key={data.id} data={data}/>
            ))
        }
    </div>
  )
}

export default LowerItem