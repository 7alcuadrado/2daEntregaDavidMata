import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import productos from './productos.json'
import { useParams } from 'react-router-dom';


function ItemListContainer(props) {

    const [product, setProductos] = useState([])
    const { id } = useParams();


    useEffect( () => {
        const pedido = new Promise ((resolve)=> {
            setTimeout(()=>{
                resolve(id ? productos.filter(item => item.categoria === id) : productos)
            }, 300)
        })
        pedido.then((data) => {
            setProductos(data)
        })
    },[id])

  return (
    <div>
        <ItemList datos={product}/>
    </div>
  )
}

export default ItemListContainer