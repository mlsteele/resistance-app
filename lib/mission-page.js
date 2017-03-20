// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
var LabeledNumber = require('./labeled-number.js')
var PT = React.PropTypes
import classnames from './classnames.js'
var cx = classnames

export default class MissionPage extends Component {
  render() {
    const missionNumbers = this.renderMissionNumbers()

    if (this.props.revealed) {
      const passLabel = this.props.passes === 1 ? "Pass" : "Passes"
      const failLabel = this.props.fails === 1 ? "Fail" : "Fails"

      return <View testID="mission-page-revealed">
        {missionNumbers}
        <View testID="vote-holder">
          <LabeledNumber
            name={passLabel}
            num={this.props.passes} />
          <LabeledNumber
            name={failLabel}
            num={this.props.fails} />
        </View>
        <Button
          title={'Reset'}
          onPress={this.props.onReset}
        />
      </View>
    } else {
      var votes = this.props.passes + this.props.fails
      Math.random()
      var side = Math.random() > 0.5
      return <View testID="mission-page">
        {missionNumbers}
        <LabeledNumber
          name="Votes"
          num={votes} />
        {this.renderVoteButton(side)}
        {this.renderVoteButton(!side)}
        <Button
          title={'Reset'}
          onPress={this.props.onReset}
          />
        <Button className="reveal"
          title={'Show Votes'}
          onPress={this.props.onReveal}
          />
      </View>
    }
  }

  renderMissionNumbers() {
    var playerCountsMapping = {
      5: ["2", "3", "2", "3", "3"],
      6: ["2", "3", "4", "3", "4"],
      7: ["2", "3", "3", "4*", "4"],
      8: ["3", "4", "4", "5*", "5"],
      9: ["3", "4", "4", "5*", "5"],
      10: ["3", "4", "4", "5*", "5"],
    }
    var playerCounts = playerCountsMapping[this.props.numPlayers]
    var history = this.props.history

    if (playerCounts === undefined) {
      return null
    }

    const digits = playerCounts.map(function(n, i) {
      const played = history.length > i;
      const passed = history[i]==0 || (history[i]==1 && playerCounts[i].indexOf("*")!=-1);

      const todo = {
        'pass': played && passed,
        'fail': played && !passed,
        'current': history.length ===i,
        'num': true,
      };

      return <Text key={i}>{playerCounts[i]}</Text>
    })

    return <View>{digits}</View>
  }

  renderVoteButton(pass) {
    const label = pass ? "Pass" : "Fail"
    const todo = {
      'pass': pass,
      'fail': !pass,
      'secret-focus': true,
    }
    const onPress = () => {
      this.onVote(todo.pass)
    }
    return (<View key={label} testID={'vote-container'}>
      <Button
        title={label}
        onPress={onPress}
        />
    </View>);
  }

  onVote = (pass) => {
    this.props.onVote(pass)
  }
}

MissionPage.propTypes = {
  numPlayers: PT.number.isRequired,
  passes: PT.number.isRequired,
  fails:  PT.number.isRequired,
  history: PT.array.isRequired,
  revealed:  PT.bool.isRequired,
  onVote:  PT.func.isRequired,
  onReset:  PT.func.isRequired,
  onReveal:  PT.func.isRequired,
}
