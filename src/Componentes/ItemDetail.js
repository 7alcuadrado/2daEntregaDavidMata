import React from 'react'
import Item from './Item'

function ItemDetail({item}) {
  return (
    <div key={item.id} >
        <Item producto={item}></Item>
    </div>
  )
}

export default ItemDetail