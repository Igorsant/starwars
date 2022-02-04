import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Movie.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// const Grid = style.div`
//     padding: 2px
// `

const Movie = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(
        () => {
            setData({})
            console.log('redered')
            fetch(`https://swapi.dev/api/films/${id}`)
                .then(data => data.json())
                .then(res => setData(res))
        },
        [setData]
    )
    return (
        <SkeletonTheme baseColor='rgba(102, 95, 95, 0.356)' highlightColor='#FFF'>
            <div style={{color: 'yellow'}}>
                <header>
                    {data ? <h1>{data.title}</h1> : <Skeleton />}
                </header>
                <div className='flexMovie'>
                    <div className='.flexItemMovie'>
                        <div className='card'>
                            <h3>Characters</h3>
                        </div>

                        <div className='card'>
                            <h3>Characters</h3>
                        </div>
                    </div>
                    
                    <div className='.flexItemMovie'>
                        <div className='card'>
                            <h3>Planets</h3>
                        </div>
                    </div>

                    <div className='.flexItemMovie'>
                        <div className='card'>
                            <h3>Species</h3>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default Movie