/**
 * @flow
 */

import React, { Component } from 'react';
import ResistanceRoot from './index.js';
import {
  AppRegistry,
} from 'react-native';

export default class resistance extends Component {
  render() {
    return (
      <ResistanceRoot />
    );
  }
}

AppRegistry.registerComponent('resistance', () => resistance);
