import React, { useEffect, useState } from 'react'

const Card = (props) => {
    const [data, setData] = useState(null)

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
            {props.url ? <h3 style={{color:"cyan"}}>{data && data.name}</h3> : <h3>{props.title}</h3>}
            
        </div>
    )
}

export default Card;