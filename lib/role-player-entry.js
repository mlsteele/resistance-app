// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
var PlayerChip = require('./player-chip.js')
var PT = React.PropTypes

var RolePlayerEntry = React.createClass({
    propTypes: {
        name: PT.string.isRequired,
        confirmed: PT.bool.isRequired,
        selected: PT.bool.isRequired,
        content: PT.element,

        onClickShow: PT.func.isRequired,
        onClickConfirm: PT.func.isRequired,
        onClickBack: PT.func.isRequired,
    },

    render: function() {
        return <View key={this.props.name}>
            <PlayerChip name={this.props.name} />
            {this.renderButton()}
            {this.props.content}
        </View>
    },

    renderButton: function() {
        let clickHandler = function() {
            console.log("player entry: show")
            this.props.onClickShow(this.props.name)
        }.bind(this);
        var text = "Show role";

        if(this.props.confirmed) {
            clickHandler = function() {
                console.log("player entry: back")
                this.props.onClickBack()
            }.bind(this);
            text = "Hide";
        }
        else if (this.props.selected) {
            clickHandler = function() {
                console.log("player entry: confirm")
                this.props.onClickConfirm(this.props.name)
            }.bind(this);
            text = "Are you " + this.props.name + "?";
        }

        return <Button title={text} onPress={clickHandler} />
    }

});

module.exports = RolePlayerEntry
