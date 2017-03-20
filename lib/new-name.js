// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
var Namelet = require('./namelet.js')
var PT = React.PropTypes

export default class NewName extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  render() {
    return <View>
      <Namelet name={this.state.text} />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.onChange}
        onSubmitEditing={this.onSubmit}
        value={this.state.text} />
    </View>

    return <form className="new-player" onSubmit={this.onSubmit}>
      <Namelet name={this.state.text} />
      <input type="name"
        className="name"
        value={this.state.text}
        placeholder="Another Player"
        autoCapitalize="on"
        onChange={this.onChange}
        ></input>
      <button className="new-player">
        Add</button>
    </form>
  }

  onChange = (text) => {
    text = text.charAt(0).toUpperCase() + text.slice(1),
    this.setState({text})
  }

  onSubmit = () => {
    if (this.state.text != "") {
      this.props.onAddName(this.state.text)
      this.setState({text: ""})
    }
  }
}

NewName.propTypes = {
  onAddName: PT.func,
}
