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
            iconStyle={styles.iconStyle}
            selectedIconStyle={styles.selectedIconStyle}
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
          style={styles.tab}
          selectedStyle={styles.selected}
          >
          {val.name}
        </Text>
      }.bind(this)) 
    },
});

const tabHeight = 75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  tabs: {
    flex: 1,
    top: 10,
    height: tabHeight,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 0
    },
  },
  iconStyle: {
    backgroundColor: '#fa6900',
    borderColor: '#f6a260',
    borderBottomWidth: 5,
  },
  selectedIconStyle: {
    borderColor: 'white',
  },
  tab: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 18,
  },
  selected: {
    color: 'white',
  },
  scroll: {
    marginTop: tabHeight + 5,
    flex: 1,
  },
});

module.exports = Tabs
