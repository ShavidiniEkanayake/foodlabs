import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Landing from '../Pages/Landing'

function PageRoutes(){
    return(
       <Router>
        <Routes>
            <Route path='/' element={<Landing/>}></Route>
        </Routes>
       </Router>
    )
}

export default PageRoutes