import React from 'react'
import { Container ,Row, Col, Card} from 'react-bootstrap';

function Home() {
    return (
        <>
        <style type="text/css">
        </style>

        <Container className="con">
            <h1>This is my Home</h1>
            <Row>
                <Col>
                    <li><a href="/page1">메모장</a></li>
                    <li><a href="/page2">page2</a></li>
                    <li><a href="/filetest">fileupload test with django server</a></li>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home
