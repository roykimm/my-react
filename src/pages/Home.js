import React from 'react'
import { Container } from 'react-bootstrap';

function Home() {
    return (
        <Container style={{ color : "#000" }}>
            <h1>this is home</h1>
            <a href="/page1">page1</a> 
            <a href="/page2">page2</a>            
        </Container>
    )
}

export default Home
