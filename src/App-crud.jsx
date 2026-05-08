import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

function App() {

  let { register, handleSubmit,reset } = useForm();
  let [products,setProducts]=useState([])
  let [editItem,setEditItem]=useState(null)

  let handleEdit=(item)=>{ //a comes from edit and "a" in edit is all the products of the api because we need to edit anything
          setEditItem(item)
          reset({
            title:item.title,
            price:item.price,
          })

  }
  let handleDelete=async (id)=>{
    await axios.delete(`https://dummyjson.com/products/${id}`)
    console.log("Deleted:", id)  
    fetchProducts

  }
  async function fetchProducts(){
    let res= await axios.get("https://dummyjson.com/products")
    setProducts(res.data.products)
  }
  useEffect(()=>{
    fetchProducts()
  
  },[])

  let onSubmit = async(data) => {
    if(editItem)
    {
      await axios.put(`https://dummyjson.com/products/${editItem.id}`,data) //it puts the data in the form
      alert("product updated")
    }
    else{
      await axios.post(`https://dummyjson.com/products/add`,data)
      alert("product added")
    }
    reset()
    setEditItem(null)
    fetchProducts()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='enter title' {...register("title")} />
        <input type="text" placeholder='enter price'  {...register("price")}/>
        <button type='submit'>{editItem?"Update Product":"Add product"}</button>
       
        {products.map(a=><li key={a.id}>{a.title} <button onClick={()=>handleEdit(a)} className='border'>Edit</button>
        <button onClick={()=>handleDelete(a.id)}className='border'>Delete</button></li>)}
        
        
        
      </form>
    </div>
  )
}

export default App