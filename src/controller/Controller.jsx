import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../model/Pages/Home/Home'
import Movie from '../model/Pages/Movie/Movie'

const Controller = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies/:id" element={<Movie />} />
            </Routes>
            <footer><p>All rights reserved - made by Igor Oliveira dos Santos &copy;</p></footer>
        </Router>
    )
}

export default Controller