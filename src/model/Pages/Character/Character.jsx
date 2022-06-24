import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card'
import MainTemplate from '../../../common/MainTemplate'
import styled from 'styled-components'

const CharactersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Character = (props) => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const stats = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender']
    useEffect(
        () => {
            fetch(`https://swapi.dev/api/people/${id}`)
                .then(data => data.json())
                .then(res => {
                    setData(res)
                })
        },
        [setData]
    )

    return (
        <MainTemplate title={data && `Character: ${data.name}`}>
            <CharactersContainer>
                <Card title="Characteristics" ></Card>
                <div className='card'>
                    {stats.map(stat => (<p key={stat} >{data && `${stat}: ${data[stat]}`}</p>))}
                </div>
            </CharactersContainer>
        </MainTemplate>
    )
}

export default Character