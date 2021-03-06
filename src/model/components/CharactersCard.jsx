import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CharactersCard = (props) => {
    const [names, setNames] = useState([])
    const getIdFromUrl = (url) => {
        const splittedUrl = url.split('/')
        return splittedUrl[splittedUrl.length-2]
    }
    useEffect(() => {
        if(props.urls && names.length == 0){
            const currentNames = [];
            for(let url of props.urls){
                fetch(url).then(data => data.json()).then(res => {
                    currentNames.push({ id: getIdFromUrl(url), name: res.name });
                })
            }
            setNames(currentNames)
        }
        
    }, [props.urls])

    return (
        <div className='card'>
            {names.map(name => 
                <Link key={`character => ${name.id}`} to={`/characters/${name.id}`} style={{color: 'cyan', textIndent: '20px'}}>{name.name}</Link>
            )}
        </div>
    )
}

export default CharactersCard;