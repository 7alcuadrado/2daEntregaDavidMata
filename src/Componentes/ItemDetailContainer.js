import React from 'react'
import ItemDetail from './ItemList'
import { useState, useEffect } from 'react'
import productos from './productos.json'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {

        const { id } = useParams();
        const [item, setItem] = useState([])

        useEffect( () => {
            const fetch = new Promise ((resolve)=> {
                setTimeout(()=>{
                    resolve(productos.find(item => item.id === parseInt(id)))
                }, 300)
            })
            fetch.then((data) => {
                setItem(data)
            })
        },[id])


  return (
    <div>
        {item ? (
          <ItemDetail datos={item}/>

        ) : (
            <h1>El item no existe</h1>
        )
        }
    </div>
  )
}

export default ItemDetailContainer