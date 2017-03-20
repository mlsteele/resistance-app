// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
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
      <View>
        <SetupPlayerList
            playerNames={this.props.playerNames}
            onAddName={this.props.onAddName}
            onDeleteName={this.props.onDeleteName} />
        <Text>SetupPage</Text>
      </View>
    );

    // return <div>
    //     <Settings
    //         settings={this.props.settings}
    //         onChangeSettings={this.props.onChangeSettings} />
    //     <button className="new-game"
    //         onClick={this.props.onNewRoles}>New Game</button>
    //     <RefLinks />
    // </div>
  },
});

module.exports = SetupPage