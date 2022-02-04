import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import links from './links'

const Home = () => {
    
    
    return (
        <div className='flex'>
            <h1 className='header'>Escolha o filme</h1>
            <div className='links'>
                {links.map(link => 
                    <Link key={link.id} to={`/movies/${link.id}`} className='btn'>
                        {link.label}
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Home