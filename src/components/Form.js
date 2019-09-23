import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class ContactForm extends Component {
    constructor(props) {    
    super(props)
    this.state={
        picturesSlider: [],
        pictures: []
    }
    }

    render() {
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Enter name here" required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email" placeholder="Enter email here" required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="tel" id="phone" placeholder="Enter phone number here" required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="text">Message</Label>
                        <Input type="textarea" id="text" placeholder="Enter message here" required></Input>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
            
        )
    }
}

export default ContactForm;