// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import {RButton} from './button.js'
import Maybe from './maybe.js'
var LabeledNumber = require('./labeled-number.js')
import FontAwesome from 'react-native-fontawesome';
var PT = React.PropTypes

export default class MissionPage extends Component {
  render() {
    return <View style={styles.page} testID="mission-page">
      <View style={styles.pageTop}>
        {this.renderMissionNumbers()}
        {this.props.revealed ? this.renderRevealed() : this.renderNotRevealed()}
      </View>
      <RButton
        style={styles.resetButton}
        onPress={this.props.onReset} >
        <FontAwesome style={{fontSize: 20, marginRight: 10}}>refresh</FontAwesome>
        <Text style={{fontSize: 20}}>Reset</Text>
      </RButton>
    </View>
  }

  renderNotRevealed() {
    var votes = this.props.passes + this.props.fails
    var side = Math.random() > 0.5
    return [
      <View key={1} style={styles.labeledNumberContainer}>
        <LabeledNumber style={styles.labeledNumber}
          name="Votes"
          num={votes} />
      </View>,
      <View key={2} style={styles.voteButtonContainer}>
        {this.renderVoteButton(side)}
        {this.renderVoteButton(!side)}
      </View>,
      <RButton style={styles.revealButton} key={3}
        onPress={this.props.onReveal} >
        <Text style={{fontSize: 20}}>Show Votes</Text>
        </RButton> ];
  }

  renderRevealed() {
    const passLabel = this.props.passes === 1 ? "Pass" : "Passes"
    const failLabel = this.props.fails === 1 ? "Fail" : "Fails"

    return (
      <View style={styles.labeledNumberContainer}>
        <LabeledNumber key={1} style={styles.labeledNumber}
          name={passLabel}
          num={this.props.passes} />
        <LabeledNumber key={2} style={styles.labeledNumber}
          name={failLabel}
          num={this.props.fails} />
      </View> );
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
      onPress={onPress} >
      {!pass && <FontAwesome style={styles.failIcon}>bomb</FontAwesome>}
      <Text style={styles.voteButtonText}>{label}</Text>
    </RButton>
        );
  }

  onVote = (pass) => {
    this.props.onVote(pass)
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pageTop: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffc',
  },
  missionSizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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
  labeledNumberContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  labeledNumber: {
    marginHorizontal: 30,
  },
  voteButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#ccf',
  },
  voteButton: {
    flex: 1,
    minHeight: 60,
    maxHeight: 110,
  },
  voteButtonText: {
    fontSize: 22,
    textShadowColor: 'rgba(255,255,255, 0.3)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
  passButton: {},
  failButton: {
    backgroundColor: '#c33',
  },
  failIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  revealButton: {
    maxHeight: 70,
    marginTop: 10,
    marginHorizontal: 30,
  },
  resetButton: {
    width: 150,
    maxHeight: 60,
    marginLeft: 30,
    marginBottom: 17,
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
