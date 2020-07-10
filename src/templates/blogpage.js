import React from 'react'
import Layout  from "../components/layouts/layout"
import Seo from "../components/seo"
import {Container,Row,Col} from "reactstrap"
import "./blogpage.css"
import Img from "gatsby-image"
import Collapsy from "../components/collapse"


export default function Blogpage({data}) {
  const seoImage=data.strapiBlogs.CoverImage.publicURL
  return (
    <div>
    <Seo
    title={data.strapiBlogs.Title}
    image={seoImage}
    description={data.strapiBlogs.SubTitle}
    />
          <div>
            <Layout>
            <div>
              
            <Container fluid="lg">
            <div className="blogstart">
              <Col>
                <Img  width="100%" fluid={data.strapiBlogs.CoverImage.childImageSharp.fluid}/>
              </Col>
              <Col>
             <h1 className="title">{data.strapiBlogs.Title}</h1>
             <h2 className="subtitle">{data.strapiBlogs.SubTitle}</h2>
             <p className="content">{data.strapiBlogs.Content}</p>
             </Col>
             </div>
             <div className="share">
             <Collapsy/>
             </div>
             <div>
             <Row xs="1">
             <Col>
             <div className="blogenddiv">
             <h4 className="blogendintro">Stay connected to</h4>
             <h1 className="blogend">SVSKHD</h1>
             </div>
             </Col>
             </Row>
             </div>
            </Container>
            </div>
            </Layout>
        </div>
        </div>
    )
}

export const query=graphql`
query BlogQuery($id:String!) {
    strapiBlogs(id: {eq: $id}) {
      id
      Title
      SubTitle
      Content
      CoverImage {
        publicURL
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 700) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  }
  
`