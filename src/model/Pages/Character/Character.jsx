import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Character = (props) => {
    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(
        () => {
            console.log('got here!')
            fetch(`https://swapi.dev/api/people/${id}`)
                .then(data => data.json())
                .then(res => {
                    setData(res)
                })
        },
        [setData]
    )

    return (
        <div style={{color: 'yellow'}}>
            <header>
                {data && <h1>{`Character: ${data.name}`}</h1>}
            </header>
            
        </div>
    )
}

export default Character