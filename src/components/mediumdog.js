import React, { Component } from 'react';
import './dogs.css';
import axios from "axios";
import { connect } from 'react-redux';


export class MediumDog extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            imgURL: ''
        }
    }

    randomInteger(array) {
        return Math.floor(Math.random() * array.length);
    };

    componentDidMount() {
        const breeds = ['australian', 'boxer', 'labrador', 'akita'];
        const breed = breeds[this.randomInteger(breeds)];
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random`).then((response) => {
            this.setState({imgURL: response.data.message});
            console.log(response.data.message);
        })
    }

    render() {
        return (
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
        )
    }
}

export default MediumDog