import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image3 from "../assets/designing2.jpg"
import image1 from "../assets/programmer.jpg"
import image2 from "../assets/mern.png"
import webdesign from "../assets/web1.png"
import steve from "../assets/steve.jpeg"
import elon from "../assets/elon.jpeg"
import mark from "../assets/mark.jpeg"



function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
            style={{ width: 800, height: 400 }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            style={{ width: 800, height: 400 }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            style={{ width: 800, height: 400 }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <div
        className="container-fluid about-heading bg-dark shadow mt-0"
        style={{ height: 150, display: "flex", alignItems: "center" }}
      >
        <div className="container">
          <h1 className="text-light text-center">Our Clients</h1>
        </div>
      </div>

      <div class="container my-4">
        <div class="row">
          <div class="col mb-2">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={steve}  />
              <Card.Body>
                <Card.Title id="2">Steve Jobbs</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={elon} />
              <Card.Body>
                <Card.Title>Elon Musk</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={mark} />
              <Card.Body>
                <Card.Title>Mark Zuckerberg</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="w-100"></div>
        </div>
      </div>


    </>
  );
}

export default Home;