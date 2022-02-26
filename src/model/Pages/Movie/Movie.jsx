import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Movie.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Card from '../../components/Card'
import CharactersCard from '../../components/CharactersCard'
import PlanetsCard from '../../components/PlanetsCard'
import SpeciesCard from '../../components/SpeciesCard'
import MainTemplate from '../../../common/MainTemplate'
import styled from 'styled-components'
import { css } from 'styled-components'

const Collapse = styled.div`
    ${ props => css`
        height: ${props.height};
        overflow: hidden;
    `};
    transition: height 1s;
`

const Movie = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const [showCharacters, setShowCharacters] = useState(false);
    const [showPlanets, setShowPlanets] = useState(false);
    const [showSpecies, setShowSpecies] = useState(false);

    useEffect(
        () => {
            fetch(`https://swapi.dev/api/films/${id}`)
                .then(data => data.json())
                .then(res => {
                    setData(res)
                })
        },
        [id]
    )

    const handleCharactersClick = () => setShowCharacters(curr => !curr)
    const handlePlanetsClick = () => setShowPlanets(curr => !curr)
    const handleSpeciesClick = () => setShowSpecies(curr => !curr)
    return (
        <SkeletonTheme baseColor='rgba(102, 95, 95, 0.356)' highlightColor='#FFF'>
            <MainTemplate title={data && data.title}>
                <div className='flexMovie'>
                    <div className='flexItemMovie'>
                        {/* <Card title="Characters" url={}></Card> */}
                        <Card collapsible onClick={handleCharactersClick} title="Characters" show={showCharacters}></Card>
                        <Collapse height={showCharacters ? '100%' : '0'}>
                            <CharactersCard urls={data && data.characters}></CharactersCard>
                        </Collapse>
                    </div>
                    
                    <div className='flexItemMovie'>
                        <Card collapsible onClick={handlePlanetsClick} title="Planets" show={showPlanets}></Card>
                        <Collapse height={showPlanets ? '100%' : '0'}>
                            {data && data.planets.map(planet => <PlanetsCard key={planet} url={planet}></PlanetsCard>)}
                        </Collapse>
                        
                    </div>

                    <div className='flexItemMovie'>
                        <Card collapsible onClick={handleSpeciesClick} show={showSpecies} title="Species"></Card>
                        <Collapse height={showSpecies ? '100%' : '0'}>
                            {data && data.species.map(specie => <SpeciesCard key={specie} url={specie}></SpeciesCard>)}
                        </Collapse>
                    </div>
                </div>
            </MainTemplate>
                
        </SkeletonTheme>
    )
}

export default Movie