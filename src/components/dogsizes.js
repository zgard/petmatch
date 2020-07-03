import React, { Component } from 'react';
import './dogsizes.css';
import { connect } from 'react-redux';

class Dogsizes extends Component {

    bigBold = () => {
        this.props.bigBold();
        this.props.history.push('/bigbolddogs')
     }

     medium = () => {
        this.props.medium();
        this.props.history.push('/mediumdog')
     }
     lapSize = () => {
        this.props.lapSize();
        this.props.history.push('/lapsizedog')
     }
     tiny = () => {
        this.props.tiny();
        this.props.history.push('/tiny')
     }

    render() {
        return (
            <div className="Dogsizes">
                <h1>You selected <b>Doggo</b>!</h1>
                <h3>What kind of doggo would do you prefer?</h3>
                    <div><button onClick={this.bigBold}>Big and Bold</button></div>
                    <div><button onClick={this.medium}>Medium</button></div>
                    <div><button onClick={this.lapSize}>Lap Size</button></div>
                    <div><button onClick={this.tiny}>Tiny</button></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bigBold: state.bigBold
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       bigBold: () => {
        return dispatch({type: 'BIGBOLD', payload: {points: 1}});
       },
       medium: () => {
        return dispatch({type: 'MEDIUM', payload: {points: 1}});
       },
       lapSize: () => {
        return dispatch({type: 'LAPSIZE', payload: {points: 1}});
       },
       tiny: () => {
        return dispatch({type: 'TINY', payload: {points: 1}});
       } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Dogsizes)