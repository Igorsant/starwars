import React, { useEffect, useState } from 'react'

const CharactersCard = (props) => {
    const [names, setNames] = useState([])
    
    useEffect(() => {
        console.log(names)
        if(props.urls && names.length == 0){
            for(let url of props.urls){
                fetch(url).then(data => data.json()).then(res => {
                    setNames(curr => [...curr, res.name])
                    console.log('opa')
                })
            }
        }
        
    }, [props.urls])

    return (
        <div className='card'>
            {names.map(name => 
                <p style={{color: 'cyan', textIndent: '20px'}}>{name}</p>
            )}
        </div>
    )
}

// TODO transform to links

export default CharactersCard;