import React, { Component } from 'react'; 
import TextSelector from './TextSelector.js';

export default class NameTag extends Component {

    state = {
      text: '',
    }

    render() {
      const { text } = this.state;

      return (
        <>
          <TextSelector/>
          {/* <ColorSelector/> */}
        </>
      );
    }
}

