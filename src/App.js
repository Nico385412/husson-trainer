import React, { Component } from 'react';
import {Button, Col, Grid, PageHeader, Panel, Row} from "react-bootstrap";
import {wordBasic} from './data';
import Stats from "./Stats";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            wordToTrad:'Mot à traduire',
            wordTrad:'Traduction',
            num:'',
            goodR:0,
            badR:0
        }
    }

    getAWord(){
        const num = Math.floor(Math.random() * wordBasic.length);
        const wordToTrad = wordBasic[num].anglais;
        const wordTrad = wordBasic[num].francais[0];
        this.setState({
            wordToTrad,
            wordTrad,
            num
        });
        console.log('wordBasic : ', wordBasic[num].anglais);
    }

    traduire(){
        const wordTrad = wordBasic[this.state.num].francais;
        this.setState({wordTrad});
    }

  render() {

    return (
      <Grid>
          <Row>
              <Col md={12}>
                  <PageHeader>Husson 2000 trainer <span style={{float:"right"}}>{wordBasic.length} mots</span></PageHeader>
                  <h3>Quelle est la traduction de ce mot ?</h3>
              </Col>
          </Row>
          <br/>
          <Row>
              <Col md={2}>
                  <Button className="center-block" bsSize="large" bsStyle="warning" onClick={() => this.getAWord()}>Get a word</Button>
              </Col>
              <Col md={4}><Panel>{this.state.wordToTrad}</Panel></Col>
              <Col md={2}>
                  <Button className="center-block" bsSize="large" bsStyle="primary" onClick={() => this.traduire()}>Translate</Button>
              </Col>
              <Col md={4}><Panel>{this.state.wordTrad}</Panel></Col>
          </Row>
          <Row>
              <Col md={3} mdOffset={3}>
                  <Button bsSize="large" bsStyle="success" onClick={() => this.setState({goodR: this.state.goodR +1})}>Bonne réponse</Button>
              </Col>
              <Col md={3} mdOffset={1}>
                  <Button bsSize="large" bsStyle="danger" onClick={() => this.setState({badR: this.state.badR + 1})}>Mauvaise réponse</Button>
              </Col>
          </Row>
          <hr/>
          <Row>
              <Col md={12} mdOffset={0}>
                  <Stats goodR={this.state.goodR} badR={this.state.badR} max={wordBasic.length}/>
              </Col>
          </Row>
      </Grid>
    );
  }
}

export default App;
