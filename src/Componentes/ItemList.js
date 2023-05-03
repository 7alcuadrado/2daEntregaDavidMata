import React from 'react'
import Item from './Item'

function ItemList({datos}) {

  return (
    <section className='container' >
            { datos.map((product) => {
                return (
                    <div className='containerChild'>
                        <Item key={product.id} imagen={product.image} parrafo={product.description} titulo={product.title} precio={product.price}/> 

                    </div>               
            )
            })  
            }
    </section>

  )
}

export default ItemList