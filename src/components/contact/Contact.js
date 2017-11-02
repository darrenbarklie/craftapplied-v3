import React, { Component } from 'react'
import { ContactInfo, ContactForm } from '.'


export class Contact extends Component {
  render() {
    return (
      <div className="page contact">

        <ContactInfo />

        <ContactForm />

      </div>
    )
  }
}
