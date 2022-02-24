import React, { useEffect, useState } from 'react'

const Card = ({collapsible, onClick,...props}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        props.url &&
            fetch(props.url)
            .then(data => data.json())
            .then(res => {
                setData(res)

            })
    }, [setData])

    const handleClick = () => {
        onClick()
    }

    return (
        <div className='card'>
            <div style={{ display:'flex', justifyContent: 'center'}}>
            {props.url ? <h3 style={{color:"cyan"}}>{data && data.name}</h3> : <h3>{props.title}</h3>}
            
                {collapsible && <button style={{marginLeft: '20px', border: 'none', borderRadius: '10px', background: 'none', fontSize: '1em', color: 'yellow'}} onClick={handleClick}>{props.showCharacters ? <span>&#8592;</span> : <span>&#8595;</span>}</button>}
            </div>
            
        </div>
    )
}

export default Card;