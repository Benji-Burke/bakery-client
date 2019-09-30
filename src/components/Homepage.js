import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Carousel from './Carousel';
import Drop from './Drop';
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
      foundBio: [],
      foundImage: []
    };
    this.getAboutMe = this.getAboutMe.bind(this);
    this.getImages = this.getImages.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    // this.getPictures = this.getPictures.bind(this);
  }

  componentDidMount() {
    this.getAboutMe();
    this.getImages();
    // this.getPictures();
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

  async getImages() {
    const response = await axios.get(`${baseURL}`);
    const data = response.data;
    console.log('The image link is: ', data.foundImage[0].src);
    this.setState({
      foundImage: data.foundImage
    });
  }

  // getBody(body){
  //     this.setState({
  //         body: body,
  //     })
  // }

  handleDrop = files => {
    let foundImage = this.state.foundImage;
    for (let i = 0; i < files.length; i++) {
      if (!files[i].name) return;
      foundImage.push(files[i].name);
    }
    this.setState({ files: foundImage });
  };

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
            <Drop handleDrop={this.handleDrop}>
              <div className='images' style={{ height: 300, width: 250 }}>
                {this.state.foundImage.map((file, i) => (
                  // <li key={i}>{file.src}</li>
                  <li>
                    <h3>{file.header}</h3>
                    <img className='photos' src={file.src} />
                    <p>{file.caption}</p>
                  </li>
                ))}
              </div>
            </Drop>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
