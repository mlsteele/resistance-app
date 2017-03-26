// @flow

import React, { Component } from 'react';
import {getColorFromString} from './color.js'
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
var PT = React.PropTypes
import classnames from './classnames.js'
var cx = classnames
var circleImg = require('../assets/shadowcircle.png')

export default class Namelet extends Component {
  render() {
    const name = this.props.name
    const empty = !this.props.name
    let color = '#f1f1f1';
    if (!empty) {
      color = getColorFromString(this.props.name);
    }
    return <View style={styles.container}>
      { empty && <Image source={circleImg} style={styles.emptyImg} /> }
      { !empty && <View style={[styles.circle, {backgroundColor: color}]} /> }
      <Text style={styles.text}>{name[0]}</Text>
    </View>
  }
}

Namelet.propTypes = {
	name: PT.string.isRequired,
}

const diameter = 35;

const styles = StyleSheet.create({
  container: {
    width: diameter,
    height: diameter,
  },
  circle: {
    position: 'absolute',
    width: diameter,
    height: diameter,
    borderRadius: diameter / 2.,
    backgroundColor: '#c0392b',
  },
  text: {
    position: 'absolute',
    alignSelf: 'center',
    // left: diameter / 2. - 5,
    fontSize: 22,
    fontWeight: '200',
    top: diameter / 2. - 14,
    backgroundColor: 'transparent',
    color: '#333'
  },
  emptyImg: {
    width: diameter,
    height: diameter,
  },
});
