import React from 'react'
import Custom from './Custom'

function Cus() {
  let [data]=Custom("https://fakestoreapi.com/products")
  return (
    <div>
      {data.map(a=><li key={a.id}>{a.title}</li>)}
    </div>
  )
}

export default Cus
