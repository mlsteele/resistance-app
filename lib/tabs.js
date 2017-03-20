// @flow

import React, { Component } from 'react';
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
        <View>
          {this.renderButtons()}
          <ScrollView>
            {this.props.tabs[this.props.activeTab].content}
          </ScrollView>
        </View>
      );
    },

    renderButtons: function() {
      return _.map(this.props.tabs, function(val, name) {
        let changeTab = function(e) {
          this.props.onChangeTab(name)
        }.bind(this);

        let isActive = this.props.activeTab === name;

        return <Button
          title={name}
          key={name}
          onPress={changeTab}
          color={isActive ? '#090' : '#00f'}
        />
      }.bind(this)) 
    },
});

module.exports = Tabs
