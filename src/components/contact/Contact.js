import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { ContactIntro,  ContactForm, ContactInfo } from '.'


export class Contact extends Component {
  render() {
    return (
      <div className="page contact">
        <Row>
          <Col lg={6} md={8} sm={10} xs={12}>
            <ContactIntro />
  
            <ContactForm />
          </Col>

          <Col lg={8} md={8} sm={10} xs={12}>
            <ContactInfo />
          </Col>
        </Row>
      </div>
    )
  }
}
