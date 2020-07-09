import React from 'react'
import {Jumbotron,Container} from "reactstrap"
import Type from './type'

export default function Intro() {
    return (
        <div>
        <Jumbotron fluid>
          <Container fluid>
            <Type/>
            <h1 className="display-3">SVSKHD</h1>
            <p className="lead">Best tech ever.</p>
          </Container>
        </Jumbotron>
        </div>
    )
}
