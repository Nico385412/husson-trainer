import React, {Component} from 'react';
import ProgressBar from "react-bootstrap/es/ProgressBar";

// Created by Nicolas on 03/11/2017
class Stats extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('this.props', this.props);
        return (
            <div>
                <h2>Statistiques</h2>
                <br/>
                <ProgressBar>
                    <ProgressBar striped bsStyle="success" now={100* this.props.goodR / this.props.max} label={Math.floor(100* this.props.goodR / this.props.max) + `%`}/>
                    <ProgressBar bsStyle="danger" now={100* this.props.badR / this.props.max} label={Math.floor(100* this.props.badR / this.props.max) + `%`}/>
                </ProgressBar>
            </div>
        )
    }
}

export default Stats;