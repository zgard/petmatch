import React, { Component } from 'react';
import './cattypes.css';
import { connect } from 'react-redux';

class Cattypes extends Component {
    bigKind = () => {
        this.props.bigKind();
        this.props.history.push('/bigkindcat')
     }
     sassy = () => {
        this.props.sassy();
        this.props.history.push('/sassycat')
     }
     hypoaller = () => {
        this.props.hypoaller();
        this.props.history.push('/hypocat')
     }
     exotic = () => {
        this.props.exotic();
        this.props.history.push('/exotic')
     }

    render() {
        return (
            <div className="Cattypes">
                <h1>You selected <b>Kittycat</b>!</h1>
                <h3>What kind of kittycat do you prefer?</h3>
                    <div><button onClick={this.bigKind}>Big, but kind</button></div>
                    <div><button onClick={this.sassy}>Sassy</button></div>
                    <div><button onClick={this.hypoaller}>Hypoallergenic</button></div>
                    <div><button onClick={this.exotic}>Exotic</button></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bigKind: state.bigKind
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       bigKind: () => {
        return dispatch({type: 'BIGKIND', payload: {points: 1}});
       },
       sassy: () => {
        return dispatch({type: 'SASSY', payload: {points: 1}});
       },
       hypoaller: () => {
        return dispatch({type: 'HYPOALLER', payload: {points: 1}});
       },
       exotic: () => {
        return dispatch({type: 'EXOTIC', payload: {points: 1}});
       } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Cattypes)