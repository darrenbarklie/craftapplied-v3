import React, { Component } from 'react'
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';


export class ContactForm extends Component {

  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    return (

      //<Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
      <Form onSubmit={submittedValues => console.log( { submittedValues } )}>
        { formApi => (

          <form onSubmit={formApi.submitForm} id="contact-form">
            <label htmlFor="name">Name</label>
            <Text field="name" id="name" />

            <label htmlFor="email">Email</label>
            <Text field="email" id="email" />

            <RadioGroup field="gender">
              { group => (
                <div className="project-type">

                  <Radio group={group}
                    value="Web Design"
                    id="web-design"
                    className="radio-project" />
                  <label htmlFor="web-design">Web Design</label>

                  <Radio group={group}
                    value="App Design"
                    id="app-design"
                    className="radio-project" />
                  <label htmlFor="app-design">App Design</label>

                  <Radio group={group}
                    value="Other"
                    id="other"
                    className="radio-project" />
                  <label htmlFor="other">Other</label>

                </div>
              )}
            </RadioGroup>

            <label htmlFor="message">How can we help you?</label>
            <TextArea field="message" id="message" />

            <Checkbox field="newsletter" id="newsletter" className="newsletter" />
            <label htmlFor="newsletter" className="newsletter">Interested in our quarterly newsletter?</label>

            <button type="submit">Let's Talk</button>
          </form>
        )}
      </Form>
    )
  }
}