import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../model/Pages/Home/Home'
import Movie from '../model/Pages/Movie/Movie'
import Character from '../model/Pages/Character/Character'

const Controller = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies/:id" element={<Movie />} />
                <Route path="/characters/:id" element={<Character />}></Route>
            </Routes>
            <footer><p>All rights reserved - made by Igor Oliveira dos Santos &copy;</p></footer>
        </Router>
    )
}

export default Controller