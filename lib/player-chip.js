// @flow

import React, { Component } from 'react';
var Namelet = require('./namelet.js')
var PT = React.PropTypes

var PlayerChip = React.createClass({
    propTypes: {
        name: PT.string.isRequired,
    },

    render: function() {
        return <div className="player-chip">
            <Namelet name={this.props.name} />
            <span className="name">{this.props.name}</span>
        </div>
    },
});

module.exports = PlayerChip
