// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
var PT = React.PropTypes

var RoleCard = React.createClass({
    propTypes: {
        playerName: PT.string.isRequired,
        role: PT.object.isRequired,
    },

    render: function() {
        var role = this.props.role
        var contents = null

        var theSpies = role.spies || role.otherSpies || [];
        var spiesText = theSpies.join(', ')
        var spyNoun = theSpies.length == 1 ? "spy" : "spies"
        var spyVerb = theSpies.length == 1 ? "is" : "are"
        var other = role.spy? "other" : ""
        var oberonText = ( role.hasOberon
                ? <Text><Text style={styles.spy}>Oberon</Text> is hidden from you.</Text>
                : null) ;
        var spiesBlock = ( theSpies.length > 0
                ? (<Text>The {other} {spyNoun} {spyVerb} <Text style={styles.spy}>{spiesText}</Text>. {oberonText}</Text>)
                : (<Text>You do not see any {other} spies.</Text>) );
        var extraInfo = <View></View>
        var description = <Text></Text>

        var name = <Text style={styles.resistance}>resistance</Text>

        if (role.spy && !role.oberon) {
            name = <Text>a <Text style={styles.spy}>spy</Text></Text>;
            extraInfo = spiesBlock;
        }
        if (role.percival) {
            name = <Text style={styles.resistance}>Percival</Text>
            var theMerlins = role.merlins;
            var merlinsText = theMerlins.join(', ');
            var merlinNoun = theMerlins.length == 1 ? 'Merlin' : 'Merlins';
            var merlinVerb = theMerlins.length == 1 ? 'is' : 'are';
            var merlinsBlock = <Text>The {merlinNoun} {merlinVerb}: {merlinsText}</Text>
            extraInfo = merlinsBlock;
            description = <Text>You see <Text style={styles.resistance}>Merlin</Text> and <Text style={styles.spy}>Morgana</Text> both as Merlin.</Text>
        }
        if (role.merlin) {
            name = <Text style={styles.resistance}>Merlin</Text>;
            extraInfo = spiesBlock;
            description = <Text>If the spies discover your identity, resistance loses!</Text>
        }
        if (role.mordred) {
            name = <Text style={styles.spy}>Mordred</Text>
            description = <Text>You are invisible to <Text style={styles.resistance}>Merlin</Text>.</Text>
        }
        if (role.morgana) {
            name = <Text style={styles.spy}>Morgana</Text>
            description = <Text>You appear as <Text style={styles.resistance}>Merlin</Text> to <Text style={styles.resistance}>Percival</Text>.</Text>
        }
        if (role.oberon) {
            name = <Text style={styles.spy}>Oberon</Text>
            description = <Text>The other spies cannot see you, and you cannot see them.</Text>
        }

        return <View testID="role-card">
            <Text>You are {name}!</Text>
            {extraInfo}
            {description}
        </View>

    },

});

const styles = StyleSheet.create({
  resistance: {
    color: 'green',
  },
  spy: {
    color: 'red',
  },
});

var If = React.createClass({
    propTypes: {
        cond: PT.bool.isRequired,
        a: PT.element.isRequired,
        b: PT.element.isRequired,
    },

    render: function() {
        if (this.props.cond) {
            return this.props.a
        } else {
            return this.props.b
        }
    },
})

module.exports = RoleCard
