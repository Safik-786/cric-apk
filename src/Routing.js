import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Navbar from './Component/Navbar'
import App from './App'
import MatchDetail from './Component/MatchDetail'
import NavigationBar from './Component/NavigationBar'
import Odi from './Component/Odi'

function Routing() {
  return (
    <div>
        <NavigationBar/>
      <Routes>
       <Route path='/' element={
        <>
        <h3>Welcome to the home page</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis laborum adipisci reprehenderit iusto? Quisquam vero omnis recusandae et enim numquam nam perspiciatis, nesciunt sed. Tempora reiciendis facere eveniet pariatur natus alias, soluta modi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis laborum adipisci reprehenderit iusto? Quisquam vero omnis recusandae et enim numquam nam perspiciatis, nesciunt sed. Tempora reiciendis facere eveniet pariatur natus alias, soluta modi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis laborum adipisci reprehenderit iusto? Quisquam vero omnis recusandae et enim numquam nam perspiciatis, nesciunt sed. Tempora reiciendis facere eveniet pariatur natus alias, soluta modi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis laborum adipisci reprehenderit iusto? Quisquam vero omnis recusandae et enim numquam nam perspiciatis, nesciunt sed. Tempora reiciendis facere eveniet pariatur natus alias, soluta modi.</p>
        </>
       } /> 
       <Route path='/t20' element={<App/>} /> 
       <Route path='/odi' element={<Odi/>} /> 
      </Routes>
    </div>
  )
}

export default Routing
