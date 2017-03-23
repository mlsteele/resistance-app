// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  ScrollView,
  View
} from 'react-native';
import SetupPlayerList from './setup-player-list.js'
var Settings = require('./settings.js')
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
      <ScrollView style={styles.page}>
        <SetupPlayerList
            playerNames={this.props.playerNames}
            onAddName={this.props.onAddName}
            onDeleteName={this.props.onDeleteName} />
        <Settings
            settings={this.props.settings}
            onChangeSettings={this.props.onChangeSettings} />
        <Button testID="new-game"
            title='New Game'
            onPress={this.props.onNewRoles} />
      </ScrollView>
    );
  },
});

const styles = StyleSheet.create({
  page: {
  },
});

module.exports = SetupPage
