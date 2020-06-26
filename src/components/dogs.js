import React, { Component } from 'react';
import './dogs.css';
//import JobsListItem from './jobslistitem';
//import Job from './job';
import axios from "axios";
import Dogsizes from './dogsizes'
import { Switch, Route } from 'react-router-dom';


export class Dog extends Component {
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
        //const jobId = this.props.match.params.id;
        const bigBreeds = ['germanshepherd', 'malamute', 'husky', 'mastiff'];
        const breed = bigBreeds[this.randomInteger(bigBreeds)];
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

export default Dog