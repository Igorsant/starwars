import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Movie.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Card from '../../components/Card'
import CharactersCard from '../../components/CharactersCard'

const Movie = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const episodes = ['I', 'II', 'III', 'IV', 'V', 'VI']

    useEffect(
        () => {
            fetch(`https://swapi.dev/api/films/${id}`)
                .then(data => data.json())
                .then(res => {
                    setData(res)
                })
        },
        [setData]
    )
    return (
        <SkeletonTheme baseColor='rgba(102, 95, 95, 0.356)' highlightColor='#FFF'>
            <div style={{color: 'yellow'}}>
                <header>
                    {data ? <h1>{`Star Wars ${episodes[data.episode_id-1]}: ${data.title}`}</h1> : <Skeleton />}
                </header>
                <div className='flexMovie'>
                    <div className='.flexItemMovie'>
                        {/* <Card title="Characters" url={}></Card> */}
                        <Card title="Characters"></Card>

                        <CharactersCard urls={data && data.characters}></CharactersCard>
                    </div>
                    
                    <div className='.flexItemMovie'>
                        <Card title="Planets"></Card>
                    </div>

                    <div className='.flexItemMovie'>
                        <Card title="Species"></Card>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default Movie