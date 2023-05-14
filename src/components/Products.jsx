import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import webdesign from "../assets/web1.png"



function Products() {


  return (

    <>

      <div
        className="container-fluid about-heading bg-dark shadow"
        style={{ height: 150, display: "flex", alignItems: "center" }}
      >
        <div className="container">
          <h1 className="text-light text-center">Products</h1>
        </div>
      </div>

      <div class="container my-4">
        <div class="row">
          <div class="col mb-2">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={webdesign} />
              <Card.Body>
                <Card.Title id="2">Web Designing</Card.Title>
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
              <Card.Img variant="top" src={webdesign} />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
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
              <Card.Img variant="top" src={webdesign} />
              <Card.Body>
                <Card.Title>Wordpress Development</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="w-100"></div>
          <div class="col">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={webdesign} />
              <Card.Body>
                <Card.Title>Graphic Designing</Card.Title>
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
              <Card.Img variant="top" src={webdesign} />
              <Card.Body>
                <Card.Title>App Development</Card.Title>
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
              <Card.Img variant="top" src={webdesign} />
              <Card.Body>
                <Card.Title>Social Media Marketing</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

    </>
  )
}

export default Products

