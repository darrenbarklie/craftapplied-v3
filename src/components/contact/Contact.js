import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { ContactIntro,  ContactForm, ContactInfo } from '.'


export class Contact extends Component {
  render() {
    return (
      <div className="page contact">
        <Row>
          <Col lg={5} md={7} sm={9} xs={11}>
            <ContactIntro />
  
            <ContactForm />
          </Col>

          <Col lg={4} lgOffset={2} md={4} sm={12} xs={11}>
            <ContactInfo />
          </Col>
        </Row>
      </div>
    )
  }
}
