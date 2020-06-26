import React, { Component } from 'react';
import './cats.css';
//import JobsListItem from './jobslistitem';
//import Job from './job';
import axios from "axios";
import Cattypes from './cattypes'
import { Switch, Route } from 'react-router-dom';


export class Cat extends Component {
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
        // var settings = {
        //     headers: {
        //       "x-rapidapi-key": process.env.CATS_KEY
        //     }
        //   };
        // const bigBreeds = ['germanshepherd', 'malamute', 'husky', 'mastiff'];
        // const breed = bigBreeds[this.randomInteger(bigBreeds)];
        axios.get(`https://api.thecatapi.com/v1/images/search?breed_id=beng`).then((response) => {
            this.setState({imgURL: response.data[0].url});
            console.log(response.data.url);
        })
    }

    render() {
        return (
            <div className="Cat">
                <div>
                    <h1><b>Congratulations!</b></h1>
                    <h3>You matched with this kittycat!</h3>
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

export default Cat

