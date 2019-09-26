import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Carousel from './Carousel';

import Instagram from './Instagram';
import axios from 'axios';

// const baseURL = 'http://localhost:3003/bakery'
const baseURL = 'https://migdalias-confections.herokuapp.com/bakery';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picturesSlider: [],
      pictures: [],
      foundBio: []
    };
    this.getAboutMe = this.getAboutMe.bind(this);
  }

  componentDidMount() {
    this.getAboutMe();
  }

  async getAboutMe() {
    const response = await axios.get(`${baseURL}/about`);
    const data = response.data;
    // console.log(response);
    console.log(data.foundBio[0].body);
    this.setState({
      foundBio: data,
      body: data.foundBio[0].body
    });
  }

  // getBody(body){
  //     this.setState({
  //         body: body,
  //     })
  // }

  render() {
    return (
      <div>
        {/* <h1>MigdaliasConfections</h1> */}
        <img src='' />
        <div className='carousel-container'>
          <h1 className='pictures'>
            <Carousel />
          </h1>
          <div className='welcome'>
            <h1>Welcome to Migdalias Confections</h1>
            <p>{this.state.body}</p>
            <i className='fas fa-birthday-cake'></i>

            <p>{}</p>
          </div>
          <div>
            <Instagram />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
