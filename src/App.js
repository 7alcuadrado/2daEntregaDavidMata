import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './Componentes/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer'
import NavBar from './Componentes/NavBar'

function App () {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/categoria/:id' element={<ItemListContainer/>}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
        {/* <Route path="*" element={<Error404 />} /> */}

      </Routes>
      <ItemListContainer/>
      <div>
      </div>
    </BrowserRouter>

  )
}

export default App 