import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeLink = styled(Link)`
    color: yellow;
    padding: 10px 30px;
    text-decoration: none;
    border-radius: 10px;
    transition: background-color 0.5s;
    &:hover{
        background-color: rgba(102, 95, 95, 0.356);
    }
`
const NavBar = styled.div`
    display: flex;
    justify-content: center;
`
const MainTemplate = (props) => (
    <div style={{ color: 'yellow' }}>
        <header><h1>{props.title}</h1></header>
        <NavBar>
            <HomeLink to='/'>
                <h3>Home</h3>
            </HomeLink>
        </NavBar>
        {props.children}
    </div>
)

export default MainTemplate