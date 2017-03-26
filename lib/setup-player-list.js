// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ListView,
  Button,
  View
} from 'react-native';
import EasyList from './easy-list.js'
import NewName from './new-name.js'
import FontAwesome from 'react-native-fontawesome'
import Namelet from './namelet.js'
var PlayerChip = require('./player-chip.js')
var PT = React.PropTypes

export default class SetupPlayerList extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.playerNames.map(this.renderRow)}
        <NewName
          containerStyle={[styles.row, styles.dividerLine]}
          leftContainerStyle={styles.leftContainer}
          onAddName={this.props.onAddName}
          />
      </View>
    )
  }

  renderRow = (name, i) => {
    const top = i == 0;
    let onClick = () => {
      this.props.onDeleteName(name);
    };

    return (
      <View style={[styles.row, i == 0 ? null : styles.dividerLine]} key={i}>
        <View style={styles.leftContainer}>
          <Namelet name={name} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <TouchableOpacity style={styles.delete} onPress={onClick}>
          <View style={styles.deleteIconWrapper}>
            <FontAwesome style={styles.deleteIcon}>trashO</FontAwesome>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    // backgroundColor: '#eef',
  },
  dividerLine: {
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0, 0.08)',
    paddingTop: 9,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 28,
    // backgroundColor: '#fee',
  },
  name: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 1,
  },
  delete: {
    marginRight: 20,
  },
});

SetupPlayerList.propTypes = {
  playerNames: PT.array.isRequired,
  onDeleteName: PT.func.isRequired,
  onAddName: PT.func.isRequired,
}
