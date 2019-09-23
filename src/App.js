import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
    constructor(props) {
    super(props)
    
    this.state ={
        picturesSlider: [],
        pictures: [],
        collapsed: true
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle () {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    

    render(){
        return(
                <div>
                    <Router>
        <Navbar color="faded" light>
          <NavbarBrand to="/" className="mr-auto">Bakery</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link}to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
     
      
                    <body>
                        <Route path="/" exact render={props => (
                            <Homepage/>
                        )}/>
                    </body>
                </Router>
            </div>
        )
    }


}



export default App;