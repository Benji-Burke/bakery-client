import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
            </div>
            
        )
    }
}

export default Homepage;
