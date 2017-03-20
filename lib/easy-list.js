// @flow
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  Button,
  View
} from 'react-native';

export default class EasyList extends Component {
  constructor(props) {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.rows),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      // Fill the data source.
      dataSource: this.state.dataSource.cloneWithRows(nextProps.rows)
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.props.renderRow}
        enableEmptySections={true}
        {...this.props}
      />
    )
  }
}

EasyList.propTypes = {
  rows: PropTypes.array.isRequired,
  renderRow: React.PropTypes.func.isRequired,
}
