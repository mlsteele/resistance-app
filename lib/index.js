import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
var Tabs         = require('./tabs.js')
var SetupPage    = require('./setup-page.js')
var RolesPage    = require('./roles-page.js')
var MissionPage  = require('./mission-page.js')
var Dispatcher   = require('./dispatcher')
var UIState      = require('./ui-state')
var GameState    = require('./game-state')
var MissionState = require('./mission-state')
var store_reset  = require('./store-reset')

var dispatcher   = new Dispatcher()
var dispatch     = dispatcher.dispatch.bind(dispatcher)
let uistate      = new UIState(dispatcher)
let gamestate    = new GameState(dispatcher)
let missionstate = new MissionState(dispatcher)

// Increase this number after every datastore schema breaking change.
store_reset(3)
uistate.load()
gamestate.load()
missionstate.load()

export default class InnerRoot extends Component {
  componentDidMount() {
    this._refresh = (() => {
      this.forceUpdate()
    }).bind(this)

    uistate.onChange(this._refresh)
    gamestate.onChange(this._refresh)
    missionstate.onChange(this._refresh)
  }
  componentWillUnmount() {
    uistate.offChange(this._refresh)
    gamestate.offChange(this._refresh)
    missionstate.offChange(this._refresh)
  }
  render() {
    let setupPage = <SetupPage
      playerNames={gamestate.playerNames}
      settings={gamestate.settings}
      onAddName={dispatcher.bake('addPlayer', 'name')}
      onDeleteName={dispatcher.bake('deletePlayer', 'name')}
      onChangeSettings={dispatcher.bake('changeSettings', 'settings')}
      onNewRoles={dispatcher.bake('newRoles')}
      />

    var rolesPage = <RolesPage
        disabledReason={gamestate.disabledReason}
        playerNames={gamestate.playerNames}
        selectedPlayer={uistate.selectedPlayer}
        selectedRole={  gamestate.getRole(uistate.selectedPlayer)}
        selectionConfirmed={uistate.selectionConfirmed}
        onClickShow={   dispatcher.bake('selectPlayer', 'name')}
        onClickConfirm={dispatcher.bake('confirmPlayer', 'name')}
        onClickCancel={ dispatcher.bake('deselectPlayer')}
        onClickOk={     dispatcher.bake('deselectPlayer', 'name')}
    />

    var missionPage = <MissionPage
        numPlayers={gamestate.playerNames.length}
        passes={missionstate.passes}
        fails={missionstate.fails}
        history={missionstate.history}
        revealed={uistate.missionRevealed}
        onVote={dispatcher.bake('missionVote', 'pass')}
        onReveal={dispatcher.bake('missionReveal')}
        onReset={dispatcher.bake('missionReset')}
    />

    // return (
    //     Tabs({
    //         activeTab: uistate.tab,
    //         onChangeTab: dispatcher.bake('changeTab', 'tab'),
    //         tabs: {
    //             setup: {name: 'Setup', content: setupPage},
    //             roles: {name: 'Roles', content: rolesPage},
    //             mission: {name: 'Mission', content: missionPage},
    //         }
    //     })
    // );

    return (
      <Tabs
        activeTab={uistate.tab}
        onChangeTab={dispatcher.bake('changeTab', 'tab')}
        tabs={{
          setup: {name: 'Setup', content: setupPage},
          roles: {name: 'Roles', content: rolesPage},
          mission: {name: 'Mission', content: missionPage},
        }}
      />
    );

    return (
        <Text>Inner</Text>
    );
  }
}
