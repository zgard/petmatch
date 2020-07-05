import React, { Component } from 'react';
import './dogs.css';
import axios from "axios";

export class BigBoldDog extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            render: false,
            imgURL: ''
        }
    }

    randomInteger(array) {
        return Math.floor(Math.random() * array.length);
    };

    componentDidMount() {

        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 3 seconds, set render to true
        }.bind(this), 3000)

        const breeds = ['germanshepherd', 'malamute', 'husky', 'mastiff'];
        const breed = breeds[this.randomInteger(breeds)];
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random`).then((response) => {
            this.setState({imgURL: response.data.message});
            console.log(response.data.message);
        })
    }

    render() {
        let renderContainer = false //By default don't render anything
            if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer =
            
            <div className="Dog">
                <div>
                    <h1><b>Congratulations!</b></h1>
                    <h3>You matched with this doggo!</h3>
                    <a><img src={this.state.imgURL} width="20%"></img></a>
                    <h3>Would you like to take me out for a play-date?</h3>
                </div>
                <div>
                    <button className="Yes">Yes!</button>
                    <br />
                    <button className="No">No</button>
                </div>
            </div>
            }
        return (
            renderContainer
        )
    }
}

export default BigBoldDog