import React, { Component } from 'react';
import './cattypes.css';

class Cattypes extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    render() {
        return (
            <div className="Cattypes">
                <h1>You selected <b>Kittycat</b>!</h1>
                <h3>What kind of kittycat would do you prefer?</h3>
                    <div><a href="#">Big, but kind</a></div>
                    <div><a href="#">Sassy</a></div>
                    <div><a href="#">Hypoallergenic</a></div>
                    <div><a href="#">Tiny</a></div>
            </div>
        )
    }
}

export default Cattypes