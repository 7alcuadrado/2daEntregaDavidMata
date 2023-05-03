import React from 'react'
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <nav className='navContainer'>
        <Link  to="/">
        <h3 className='brand'>Almacenes Prime</h3>
        </Link>
        
        <div className='navContainer'>
            <Link as={Link} className='navContainerItem' to='categoria/hombres'>Hombres</Link>
            <Link as={Link}  className='navContainerItem'  to='categoria/mujeres'>Mujeres</Link>
            <Link as={Link} className='navContainerItem'  to='categoria/electronica'>Electronica</Link>
        </div>
     </nav>
  )
    

}

export default NavBar