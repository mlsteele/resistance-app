// @flow

import React, { Component } from 'react';
import RNTabs from 'react-native-tabs';
import {
  StyleSheet,
  Text,
  Button,
  ScrollView,
  View
} from 'react-native';
import _ from '../vendor/underscore-min.js'
var PT = React.PropTypes

var Tabs = React.createClass({
    propTypes: {
        activeTab: PT.string.isRequired,
        onChangeTab: PT.func.isRequired,
        tabs: PT.object.isRequired,
    },

    render: function() {
      return (
        <View style={styles.container}>
          <RNTabs
            style={styles.tabs}
            selected={this.props.activeTab}
            onSelect={(el) => this.props.onChangeTab(el.props.name)} >
            {this.renderButtons()}
          </RNTabs>
          <ScrollView style={styles.scroll}>
            {this.props.tabs[this.props.activeTab].content}
          </ScrollView>
        </View>
      );
    },

    renderButtons: function() {
      return _.map(this.props.tabs, function(val, name) {
        return <Text
          name={name}
          key={name}
          style={{color: '#00f'}}
          selectedStyle={{color: '#090'}}
          >
          {name}
        </Text>
      }.bind(this)) 
    },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  tabs: {
    flex: 1,
    top: 10,
  },
  scroll: {
    marginTop: 60,
    flex: 1,
  },
});

module.exports = Tabs
