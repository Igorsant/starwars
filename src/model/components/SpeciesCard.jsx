import React, { useEffect, useState } from 'react'

const SpeciesCard = (props) => {
    const [data, setData] = useState({
        "name": "Human", 
        "classification": "mammal", 
        "designation": "sentient", 
        "average_height": "180", 
        "skin_colors": "caucasian, black, asian, hispanic", 
        "hair_colors": "blonde, brown, black, red", 
        "eye_colors": "brown, blue, green, hazel, grey, amber", 
        "average_lifespan": "120", 
        "homeworld": "https://swapi.dev/api/planets/9/", 
        "language": "Galactic Basic"
    })

    useEffect(() => {
        const init = {
            method: 'GET',
            mode: 'no-cors'
        }
        props.url &&
            fetch(props.url)
            .then(data => data.json())
            .then(res => {
                setData(res)
            })
    }, [setData])

    return (
        <div className='card'>
            <h3>{data.name}</h3>
            <p>Classification: {data.classification}</p>
            <p>Designation: {data.designation}</p>
            <p>Average Height: {data.average_height}</p>
            <p>Skin Colors: {data.skin_colors}</p>
            <p>Hair Colors: {data.hair_colors}</p>
            <p>Eye Colors: {data.eye_colors}</p>
            <p>Average Lifespan: {data.average_lifespan}</p>
            <p>Homeworld: {data.homeworld}</p>
            <p>Language: {data.language}</p>
        </div>
    )
}

export default SpeciesCard