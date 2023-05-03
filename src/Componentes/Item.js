import { key } from 'localforage'
import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <section className='productContainer' >
        <div id={key.id}>
        <h3>{props.titulo}</h3>
        <img src={props.imagen} alt='imagen'></img>
        <p>{props.parrafo}</p>
        <p>{props.precio}</p>
        <Link to={`/item/${props.id}`}>
        <button id='btn'>
            <p className='btnParrafo'>Ver detalle</p>
        </button>  
        </Link>
    </div>
    </section>

  )
}

export default Item