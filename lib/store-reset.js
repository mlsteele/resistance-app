// @flow

import LocalStore from './localstore.js'
module.exports = store_reset

// Nuke the db if the provided version is different the saved version.
async function store_reset(version) {
  var stored = await LocalStore.get('STORE_DB_VERSION')
  if (stored === version) {
    console.log("storage check passed")
    return
  } else {
    console.log("storage check failed: clearing")
    await LocalStore.clear()
    await LocalStore.set('STORE_DB_VERSION', version)
  }
}
