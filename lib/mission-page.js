// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import {RButton} from './button.js'
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
        <LabeledNumber
          name={passLabel}
          num={this.props.passes} />
        <LabeledNumber
          name={failLabel}
          num={this.props.fails} />
        <RButton
          title={'Reset'}
          onPress={this.props.onReset}
        />
      </View>
    } else {
      var votes = this.props.passes + this.props.fails
      Math.random()
      var side = Math.random() > 0.5
      return <View style={styles.page} testID="mission-page">
        {missionNumbers}
        <LabeledNumber
          name="Votes"
          num={votes} />
        <View style={styles.voteButtonContainer}>
        {this.renderVoteButton(side)}
        {this.renderVoteButton(!side)}
        </View>
        <RButton
          title={'Reset'}
          onPress={this.props.onReset}
          />
        <RButton className="reveal"
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
      const current = history.length === i;

      let stys = [styles.missionSize]
      if (played && passed) {
        stys.push(styles.missionSizePassed)
      }
      if (played && !passed) {
        stys.push(styles.missionSizeFailed)
      }

      return <Text key={i} style={stys}>{playerCounts[i]}</Text>
    })

    return <View style={styles.missionSizeContainer}>{digits}</View>
  }

  renderVoteButton(pass) {
    const label = pass ? "Pass" : "Fail"
    const onPress = () => {
      this.onVote(pass)
    }
    let stys = [styles.voteButton];
    if (pass) {
      stys.push(styles.passButton);
    } else {
      stys.push(styles.failButton);
    }
    return (<RButton
        style={stys}
        title={label}
        onPress={onPress}
            />);
  }

  onVote = (pass) => {
    this.props.onVote(pass)
  }
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  missionSizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  missionSize: {
    fontSize: 25,
    padding: 8,
    color: '#ccc',
  },
  missionSizePassed: {
    color: '#333',
  },
  missionSizeFailed: {
    color: '#c33',
  },
  voteButtonContainer: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
  },
  voteButton: {
    flex: 1,
    height: 100,
  },
  passButton: {
  },
  failButton: {
    backgroundColor: '#c33',
  },
});

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
