// @flow

import {
  AsyncStorage
} from 'react-native';

export default class LocalStore {
  static async set(k, v) {
    console.log("set", k, v)
    try {
      await AsyncStorage.setItem(k, JSON.stringify(v))
    } catch (error) {
      return undefined
    }
  }

  static async get(k) {
    try {
      const value = await AsyncStorage.getItem(k);
      if (value !== null){
        const parsed = JSON.parse(value);
        console.log("get", k, parsed)
        return parsed
      }
    } catch (error) {
      console.log(error);
      return undefined
    }
  }

  static async clear() {
    await AsyncStorage.clear()
  }
}
