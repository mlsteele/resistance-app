// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import EasyList from './easy-list.js'
import RolePlayerEntry from './role-player-entry.js'
var RoleCard = require('./role-card.js')
var PT = React.PropTypes

export default class RolesPage extends Component {
  render() {
    if (this.props.disabledReason !== null) {
        var message = {
            tooFew: "Not enough players.",
            tooFewWithRoles: "Not enough players for the selected roles.",
            tooMany: "Too many players.",
        }[this.props.disabledReason]
        return <Text style={styles.oopsText}>{message}</Text>
    }

    return <ScrollView style={styles.page}>
      {this.props.playerNames.map(this.renderRow)}
    </ScrollView>
  }

  renderRow = (name, i) => {
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
      top={i == 0}
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

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
  },
  oopsText: {
    fontSize: 16,
    margin: 20,
    alignSelf: 'center',
  }
});

RolesPage.propTypes = {
  disabledReason: PT.oneOf(['tooFew', 'tooFewWithRoles', 'tooMany']),
  playerNames: PT.array.isRequired,
  selectedPlayer: PT.string,
  selectedRole: PT.object,
  selectionConfirmed: PT.bool.isRequired,
  onClickShow: PT.func.isRequired,
  onClickConfirm: PT.func.isRequired,
  onClickCancel: PT.func.isRequired,
  onClickOk: PT.func.isRequired,
}
