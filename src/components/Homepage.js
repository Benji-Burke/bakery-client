import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carousel from './Carousel';

class Homepage extends Component {
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
            <h1>Homepage</h1>
            <Carousel/>
            </div>
            
        )
    }
}

export default Homepage;
