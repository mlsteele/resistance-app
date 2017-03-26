// @flow

import {
  StyleSheet,
} from 'react-native';

export const shadow = StyleSheet.create({
  textShadowColor: 'rgba(255,255,255, 0.3)',
  textShadowOffset: {width: 0, height: 1},
  textShadowRadius: 2,
});

export const text = StyleSheet.create({
  fontSize: 16,
  ...shadow,
});
