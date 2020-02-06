import React, { Component } from 'react'; 
import TextSelector from './TextSelector.js';
import ColorSelector from './ColorSelector.js';

export default class NameTag extends Component {

    state = {
      text: '',
    }

    render() {
      const { text } = this.state;

      return (
        <>
          <TextSelector/>
          <ColorSelector/>
        </>
      );
    }
}

