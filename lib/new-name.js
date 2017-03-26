// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {RButton} from './button.js'
import Namelet from './namelet.js'
var PT = React.PropTypes

export default class NewName extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  render() {
	return <View style={this.props.containerStyle}>
      <View style={this.props.leftContainerStyle}>
        <Namelet name={this.state.text} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={this.onChange}
        onSubmitEditing={this.onSubmit}
        value={this.state.text} />
      <RButton style={styles.addButton} onPress={this.onSubmit}>
        <Text style={styles.addButtonText}>Add</Text>
      </RButton>
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

const hack = {
    height: 40,
    marginTop: 5,
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 45,
    borderColor: 'gray',
    // borderWidth: .5,
    backgroundColor: '#efe',
    marginHorizontal: 6,
    borderRadius: 5,
    backgroundColor: '#f1f1f1',
    paddingLeft: 10,
    ...hack,
  },
  addButton: {
    ...hack,
  },
  addButtonText: {
    fontSize: 16,
    paddingHorizontal: 10,

    textShadowColor: 'rgba(255,255,255, 0.3)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
});

NewName.propTypes = {
  onAddName: PT.func,
}
