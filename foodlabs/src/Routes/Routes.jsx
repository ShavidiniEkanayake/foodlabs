import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Landing from '../Pages/Landing'
import Auth from '../Pages/Auth'

function PageRoutes(){
    return(
       <Router>
        <Routes>
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/auth' element={<Auth/>}></Route>
        </Routes>
       </Router>
    )
}

export default PageRoutes