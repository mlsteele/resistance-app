// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import AButton from 'apsl-react-native-button'

export class RButton extends Component {
  render() {
    const {style, title, children, ...cprops} = this.props
    let fudge = () => {
      panic();
    }
    return <AButton
      style={[styles.button, style]}
      {...cprops}
      >
      {title && <Text style={[styles.text, this.props.titleStyle]}>{title}</Text>}
      {children}
      </AButton>
  }
}

const styles = StyleSheet.create({
  button: {
    // Sometimes a button will try to disappear.
    // These min dimensions make it easier to debug.
    minWidth: 10,
    minHeight: 10,

    backgroundColor: '#69D2E7',
    borderWidth: 0,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    margin: 10,

    textShadowColor: 'rgba(255,255,255, 0.3)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
});
