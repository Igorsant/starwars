import React, { useEffect, useState } from 'react'

const PlanetsCard = (props) => {
    const [data, setData] = useState({
        rotation_period: '',
        orbital_period: '',
        diameter: '',
        climate: '',
        gravity: '',
        terrain: '',
        surface_water: '',
        population: '',
    })

    useEffect(() => {
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
            <p>Rotation Period: {data.rotation_period}</p>
            <p>Orbital Period: {data.orbital_period}</p>
            <p>Diameter: {data.diameter}</p>
            <p>Climate: {data.climate}</p>
            <p>Gravity: {data.gravity}</p>
            <p>terrain: {data.terrain}</p>
            <p>Surface Water: {data.surface_water}</p>
            <p>Population: {data.population}</p>
        </div>
    )
}

export default PlanetsCard