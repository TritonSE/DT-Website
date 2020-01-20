import React, { Component, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import '../css/SocialFollow.css';
import "bootstrap/dist/css/bootstrap.min.css";

const fbIcon = "../images/fbIcon.png";
const fbLink = "https://www.facebook.com/DynamicsPerformanceTeam/";

const igIcon = "../images/igIcon.png";
const igLink = "https://www.instagram.com/dynamicsperformanceteam/?hl=en";

const mailIcon = "../images/mailIcon.png";
const mailLink = "mailto:dynamicsperformanceteam@gmail.com?subject=Hi, Dynamics Performance Team!";

class SocialFollow extends Component{
    render(){
        return(
            <div className="Social">
              <ul>
              <li>
                  <a href={fbLink}>
                    <img src={require("../images/fbIcon.png")} width="30px" height="30px"></img>
                  </a>
              </li>
              <li>
                  <a href={igLink}>
                    <img src={require("../images/igIcon.png")} width="30px" height="30px"></img>
                  </a>
                </li>
                <li>
                  <a href={mailLink}>
                    <img src={require("../images/mailIcon.png")} width="22px" height="22px"></img>
                  </a>
                </li>
                <li>
                  <Button variant="primary" onclick='Example()'>
                    Subscribe
                  </Button>
                </li>
              </ul>
            </div>
        );
      } 
}

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a href="#" onClick={handleShow}>
        Launch demo modal
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SocialFollow;