// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import EasyList from './easy-list.js'
var RolePlayerEntry = require('./role-player-entry.js')
var RoleCard = require('./role-card.js')
var PT = React.PropTypes

export default class RolesPage extends Component {
  render() {
    if (this.props.disabledReason !== null) {
        var message = {
            tooFew: "Not enough players. :(",
            tooMany: "Too many players. :(",
        }[this.props.disabledReason]
        return <Text>{message}</Text>
    }

    return <View>
      {this.props.playerNames.map(this.renderRow)}
    </View>
  }

  renderRow = (name) => {
    let selected = this.props.selectedPlayer === name;
    let confirmed = this.props.selectionConfirmed;

    var content = null;
    if (selected && confirmed) {
        content = <RoleCard
            playerName={this.props.selectedPlayer}
            role={this.props.selectedRole} />
    }

    return <RolePlayerEntry
      key={name}
      name={name}
      content={content}
      selected={selected}
      confirmed={selected && confirmed}

      onClickShow={() => this.props.onClickShow(name)}
      onClickConfirm={() => this.props.onClickConfirm(name)}
      onClickBack={() => this.props.onClickCancel(name)}
      />

  }
}

RolesPage.propTypes = {
  disabledReason: PT.oneOf(['tooFew', 'tooMany']),
  playerNames: PT.array.isRequired,
  selectedPlayer: PT.string,
  selectedRole: PT.object,
  selectionConfirmed: PT.bool.isRequired,
  onClickShow: PT.func.isRequired,
  onClickConfirm: PT.func.isRequired,
  onClickCancel: PT.func.isRequired,
  onClickOk: PT.func.isRequired,
}
