import React, { Component } from 'react';
import './dogsizes.css';

class Dogsizes extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    render() {
        return (
            <div className="Dogsizes">
                <h1>You selected <b>Doggo</b>!</h1>
                <h3>What kind of doggo would do you prefer?</h3>
                    <div><a href="#">Big and Bold</a></div>
                    <div><a href="#">Medium</a></div>
                    <div><a href="#">Lap Size</a></div>
                    <div><a href="#">Tiny</a></div>
            </div>
        )
    }
}

export default Dogsizes