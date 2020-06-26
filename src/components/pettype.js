import React, { Component } from 'react';
import './pettype.css';

class Pettype extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    render() {
        return (
            <div className="Pettypes">
                <h1>What kind of pet would you like to meet?</h1>
                    <h3></h3>
                    <div><a href="#">Doggo</a></div>
                    <div><a href="#">Kittycat</a></div>
            </div>
        )
    }
}

export default Pettype