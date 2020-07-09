import React from 'react'
import {Link} from "gatsby"
import {Button,Card, CardImg, CardText, CardBody, CardLink,CardTitle, CardSubtitle} from 'reactstrap'
import {FaBookReader} from "react-icons/fa"
import Img from "gatsby-image"

export default function PostCard(props) {
    return (
        <div className="blogpost">
        <div>
        <Card>
        <CardBody>
        <CardTitle><h1 className="posttitle">{props.title}</h1></CardTitle>
        <CardSubtitle><h3>{props.subtitle}</h3></CardSubtitle>
        </CardBody>
        <Img width="100%" fluid={props.image} alt={props.alt} />
        <CardBody>
          <CardText><p>{props.content}</p></CardText>
          <Link to={props.link}>
          <Button outline color="success"><FaBookReader size={28}/></Button>
          </Link>
        </CardBody>
        </Card>
        </div>
        </div>
    )
}
