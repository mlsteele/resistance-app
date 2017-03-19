// @flow

import React, { Component } from 'react';
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
        return <li key={this.props.name}>
            <PlayerChip name={this.props.name} />
            {this.renderButton()}
            {this.props.content}
        </li>
    },

    renderButton: function() {

        var clickHandler = function() {
            this.props.onClickShow(this.props.name)
        }.bind(this);
        var text = "Show role";

        if(this.props.confirmed) {
            clickHandler = function() {
                this.props.onClickBack()
            }.bind(this);
            text = "Hide";
        }
        else if (this.props.selected) {
            clickHandler = function() {
                this.props.onClickConfirm(this.props.name)
            }.bind(this);
            text = "Are you " + this.props.name + "?";
        }

        return <button onClick={clickHandler}>{text}</button>
    }

});

module.exports = RolePlayerEntry
