// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import InnerRoot from './lib/index.js'

export default class ResistanceRoot extends Component {
  render() {
    return <InnerRoot />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
