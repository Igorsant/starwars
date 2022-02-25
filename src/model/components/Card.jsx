import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ArrowButton = styled.button`
    margin-left: 20px;
    border: none;
    border-radius: 10px;
    background: none;
    font-size: 1em;
    color: yellow;
`

const Card = ({collapsible, onClick,...props}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        props.url &&
            fetch(props.url)
            .then(data => data.json())
            .then(res => {
                setData(res)

            })
    }, [props.url])

    const handleClick = () => {
        onClick()
    }

    return (
        <div className='card'>
            <div style={{ display:'flex', justifyContent: 'center'}}>
            {props.url ? <h3 style={{color:"cyan"}}>{data && data.name}</h3> : <h3>{props.title}</h3>}
            {collapsible && <ArrowButton  onClick={handleClick}>{props.show ? <span>&#8595;</span> : <span>&#8592;</span>}</ArrowButton>}
            </div>
            
        </div>
    )
}

export default Card;