import React from "react"
import { Link ,graphql } from "gatsby"
import Img from "gatsby-image"
import {Container,Row,Col,} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css"
import Layout from "../components/layouts/layout"
import Intro from "../components/intro"
import PostCard from "../components/card"
import { BlogSlugToUrl } from "../utils/blogslug"
import Seo from "../components/seo"

export default function ({data}){
  return (
    <Layout>
    <div>
      <Seo/>
    <Intro/>
    <Container>
     <Row xs="1" sm="1" md="3">
       {data.allStrapiBlogs.nodes.map(blog=>(
        <Col>
       <PostCard
       title={blog.Title}
       subtitle={blog.SubTitle}
       content={blog.Content.substring(0,50)}
       image={blog.CoverImage.childImageSharp.fluid}
       link={BlogSlugToUrl(blog.Slug)}
       />
       </Col>
       ))}   
     </Row>
    </Container>
    </div>
    </Layout>
  )
}

export const pageQuery=graphql`
query MyQuery {
  allStrapiBlogs {
    nodes {
      Title
      SubTitle
      Content
      Slug
      CoverImage {
        publicURL
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`