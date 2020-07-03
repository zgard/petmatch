import React, { Component } from 'react';
import './pettype.css';
import { connect } from 'react-redux';

class Pettype extends Component {
    
    doggo = () => {
        this.props.doggo();
        this.props.history.push('/dogsizes')
     }

     kittycat = () => {
        this.props.kittycat();
        this.props.history.push('/cattypes')
     }

    render() {
        return (
            <div className="Pettypes">
                <h1>What kind of pet would you like to meet?</h1>
                    <h3></h3>
                    <div><button onClick={this.doggo}>Doggo</button></div>
                    <div><button onClick={this.kittycat}>Kittycat</button></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        doggo: state.doggo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       doggo: () => {
        return dispatch({type: 'DOGGO', payload: {points: 1}});
       },
        kittycat: () => {
            return dispatch({type: 'KITTYCAT', payload: {points: 1}});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Pettype)