// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SetupPlayerList from './setup-player-list.js'
import {RButton} from './button.js'
import FontAwesome from 'react-native-fontawesome';
import Settings from './settings.js'
var RefLinks = require('./ref-links.js')
var PT = React.PropTypes

var SetupPage = React.createClass({
  propTypes: {
      playerNames: PT.array.isRequired,
      // Mapping of settings to their values.
      settings: PT.object.isRequired,
      onAddName: PT.func.isRequired,
      onDeleteName: PT.func.isRequired,
      onChangeSettings: PT.func.isRequired,
      onNewRoles: PT.func.isRequired,
  },

  render: function() {
    return (
      <KeyboardAwareScrollView style={styles.page} extraHeight={100}>
        <Text style={styles.h2}>Players</Text>
        <SetupPlayerList
            playerNames={this.props.playerNames}
            onAddName={this.props.onAddName}
            onDeleteName={this.props.onDeleteName} />
        <Text style={styles.h2}>Special Roles</Text>
        <Settings
            settings={this.props.settings}
            onChangeSettings={this.props.onChangeSettings} />
        <RButton style={styles.newGameButton} testID="new-game"
            onPress={this.props.onNewRoles} >
          <Text style={styles.newGameText}>New Game</Text>
          <FontAwesome style={styles.newGameIcon}>chevronRight</FontAwesome>
        </RButton>
      </KeyboardAwareScrollView>
    );
  },
});

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
  },
  h2: {
    fontSize: 30,
    fontWeight: '200',
    padding: 20,
    paddingBottom: 10,
  },
  newGameButton: {
    marginTop: 20,
  },
  newGameText: {
    fontSize: 16,
    marginBottom: 1,
    marginRight: 5,
  },
  newGameIcon: {
    fontSize: 16,
    marginTop: 1,
  },
});

module.exports = SetupPage
