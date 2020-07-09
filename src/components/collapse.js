import React,{useState} from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'
import {FaShare,FaFacebookF,FaPinterestP,FaTwitter,FaRedditAlien } from "react-icons/fa"

export default function Collapsy() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen); 
    return (
        <div>
     <Button outline color="success" onClick={toggle} style={{ marginBottom: '1rem' }}><FaShare size={28}/></Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
           <h4>Share to</h4>
        <Button className="FST" outline color="success"><FaFacebookF size={28}/></Button>
        <Button className="FST" outline color="success"><FaPinterestP size={28}/></Button>
        <Button className="FST" outline color="success"><FaRedditAlien size={28}/></Button>
        <Button className="FST" outline color="success"><FaTwitter size={28}/></Button>
          </CardBody>
        </Card>
      </Collapse>
        </div>
    )
}
