import React from 'react'
import HeadNav from '../headnav'
import {Container} from "reactstrap"
import Footer from '../footer'
export default function Layout(props) {
    return (
        <div>
           <Container>
            <HeadNav/>
           </Container>
            {props.children}
            <Footer/>
        </div>
    )
}
