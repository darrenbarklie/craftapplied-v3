import React, { Component } from 'react'
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';


export class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
        { formApi => (
          <form action="api/contact" method="POST" className="contact-form">

            <label htmlFor="name">Name</label>
            <Text name="name" field="name" id="name" />

            <label htmlFor="email">Email</label>
            <Text name="email" field="email" id="email" />

            <RadioGroup field="project">
              { group => (
                <div name="projectType" className="project-type">
                  
                  <p>What is your project?</p>
                  
                  <ul>
                    <li>
                      <Radio group={group}
                        value="Web Design"
                        id="web-design"
                        className="radio-project" />
                      <label htmlFor="web-design">Web Design</label>
                      <div className="check"><div className="inside"></div></div>
                    </li>
                    
                    <li>
                      <Radio group={group}
                        value="App Design"
                        id="app-design"
                        className="radio-project" />
                      <label htmlFor="app-design">App Design</label>
                      <div className="check"><div className="inside"></div></div>
                    </li>
                    
                    <li>
                      <Radio group={group}
                        value="Other"
                        id="other"
                        className="radio-project" />
                      <label htmlFor="other">Other</label>
                      <div className="check"><div className="inside"></div></div>
                    </li>                  
                  </ul>
                </div>
              )}
            </RadioGroup>

            <label htmlFor="message">How can we help you?</label>
            <TextArea name="message" field="message" id="message" />

            <div className="contact-newsletter-signup">
              
              {/* BUG :: Checkbox is not clickable */}
              
              <Checkbox name="newsletter" field="newsletter" id="newsletter" className="newsletter-contact" />
              
              <label htmlFor="newsletter-contact">
              Signup to our quarterly newsletter?  No spam, promise!</label>
              
              <span className="checkmark"></span>
              
            </div>
            
            <button type="submit">Submit Message</button>

          </form>
        )}
      </Form>
    )
  }
}
