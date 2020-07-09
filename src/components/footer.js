import React from 'react'
import Link from "gatsby"
import {Button,Jumbotron, Container,Row, Col} from "reactstrap"
import {FaFacebookF,FaPinterestP,FaRedditAlien,FaTwitter} from "react-icons/fa"

export default function Footer() {
    const year= new Date().getFullYear()
    return (
        <div>
        <Jumbotron fluid>
        <Container fluid>
        <Row>
        <Col>
        <h4>Copyrights © {year}</h4>
        </Col>
        <Col>
        <h4>Social handle</h4>
        
        <Button href="https://www.facebook.com/SVSKHD" className="FST" outline color="success"><FaFacebookF size={28}/></Button>
        <Button href="https://in.pinterest.com/SVSKHD/" className="FST" outline color="success"><FaPinterestP size={28}/></Button>
        <Button href="https://www.reddit.com/user/SVSKHD" className="FST" outline color="success"><FaRedditAlien size={28}/></Button>
        <Button href="https://twitter.com/hitesh_svsk" className="FST" outline color="success"><FaTwitter size={28}/></Button>
        </Col>
        </Row>
        </Container>
        </Jumbotron>
        </div>
    )
}
