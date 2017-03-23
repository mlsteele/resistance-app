// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import {RButton} from './button.js'
import Namelet from './namelet.js'
var PT = React.PropTypes

export default class RolePlayerEntry extends Component {
  render() {
    const topStyle = this.props.top ? null : styles.dividerLine;
    return <View key={this.props.name}
          style={[styles.container, topStyle]} >
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <Namelet name={this.props.name} />
          <Text style={styles.nameText}>{this.props.name}</Text>
        </View>
        {this.renderButton()}
      </View>
      <View style={styles.bottomContainer}>
        {this.props.content}
      </View>
    </View>
  }

  renderButton() {
    let clickHandler = function() {
      this.props.onClickShow(this.props.name)
    }.bind(this);
    var text = "Show role";

    if(this.props.confirmed) {
      clickHandler = function() {
        console.log("player entry: back")
        this.props.onClickBack()
      }.bind(this);
      text = "Hide";
    }
    else if (this.props.selected) {
      clickHandler = function() {
        this.props.onClickConfirm(this.props.name)
      }.bind(this);
      text = "Are you " + this.props.name + "?";
    }

    return <RButton
      title={text}
      style={styles.button}
      titleStyle={styles.buttonTitleStyle}
      onPress={clickHandler} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // backgroundColor: '#ccf',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // backgroundColor: '#cff',
  },
  dividerLine: {
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0, 0.08)',
    paddingTop: 11,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  bottomContainer: {
    marginHorizontal: 75,
  },
  nameText: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 1,
  },
  button: {
    marginRight: 25,
  },
  buttonTitleStyle: {
    fontSize: 16,
    marginHorizontal: 20,
  },
});

RolePlayerEntry.propTypes = {
  name: PT.string.isRequired,
  confirmed: PT.bool.isRequired,
  selected: PT.bool.isRequired,
  content: PT.element,

  onClickShow: PT.func.isRequired,
  onClickConfirm: PT.func.isRequired,
  onClickBack: PT.func.isRequired,
};
