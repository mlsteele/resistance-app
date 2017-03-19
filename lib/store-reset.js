// @flow

import LocalStore from './localstore.js'
module.exports = store_reset

function store_reset(version) {
    var stored = LocalStore.get('STORE_DB_VERSION')
    if (stored === version) {
	return
    } else {
	LocalStore.clear()
	LocalStore.set('STORE_DB_VERSION', version)
    }
}

window.store_reset = store_reset;
