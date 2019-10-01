import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class ContactForm extends Component {
    constructor(props) {    
    super(props)
    this.state={
        picturesSlider: [],
        pictures: [],
        name: '',
        email: '',
        phone: '',
        message: ''

    }
    this.handleClick = this.handleClick.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    }

    async handleNameChange(event) {
        event.preventDefault()
        let nameInput = event.target.value;
        await this.setState({
            name: nameInput
        })
        
    }

    async handleEmailChange(event) {
        event.preventDefault()
        let eamilInput = event.target.value;
        await this.setState({
            email: eamilInput
        })
        
    }

    async handlePhoneChange(event) {
        event.preventDefault()
        let phoneInput = event.target.value;
        await this.setState({
            phone: phoneInput
        })
        
    }

    async handleMessageChange(event) {
        event.preventDefault()
        let messageInput = event.target.value;
        await this.setState({
            message: messageInput
        })
        
    }

    handleClick() {
        console.log(this.state.name, this.state.email, this.state.phone, this.state.message)
    }

    render() {
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={this.state.name} onChange={this.handleNameChange} placeholder="Enter name here" required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email" value={this.state.email} onChange={this.handleEmailChange}placeholder="Enter email here" required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="tel" id="phone" value={this.state.phone} onChange={this.handlePhoneChange}placeholder="Enter phone number here" required></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="text">Message</Label>
                        <Input type="textarea" id="text" value={this.state.message} onChange={this.handleMessageChange}placeholder="Enter message here" required></Input>
                    </FormGroup>
                    <Button
                        onClick={() => {
                            this.handleClick()
                        }}
                    >Submit</Button>
                </Form>
            </div>
            
        )
    }
}

export default ContactForm;