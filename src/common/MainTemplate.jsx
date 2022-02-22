import React from 'react'

const MainTemplate = (props) => (
    <div style={{ color: 'yellow' }}>
        <header><h1>{props.title}</h1></header>
        <div style={{border:'1px solid red'}}>teste</div>
        {props.children}
    </div>
)

export default MainTemplate