// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  Button,
  View
} from 'react-native';
var NewName = require('./new-name.js')
var PlayerChip = require('./player-chip.js')
var PT = React.PropTypes

export default class SetupPlayerList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      // Load the data source.
      dataSource: this.state.dataSource.cloneWithRows(nextProps.playerNames)
    });
  }

  render() {
    return (
      <View>
        <Text>Players</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections={true}
        />
        <NewName onAddName={this.props.onAddName} />
      </View>
    )
  }

  renderRow = (name) => {
    let onClick = () => {
      this.props.onDeleteName(name);
    };

    return (
      <View>
        <Text>{name}</Text>
        <Button
          title="X"
          onPress={onClick}
          />
      </View>
    );
  }
}

SetupPlayerList.propTypes = {
  playerNames: PT.array.isRequired,
  onDeleteName: PT.func.isRequired,
  onAddName: PT.func.isRequired,
}
