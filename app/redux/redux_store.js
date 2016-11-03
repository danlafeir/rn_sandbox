'use strict';

import React from 'react-native'

import { createStore, combineReducers } from 'redux';
import playlistReducer from '../weJ/playlist/reducers/playlist'
import navigationReducer from '../weJ/navigation/reducers/navigation'

const reducer = combineReducers({
  playlist: playlistReducer,
  navigation: navigationReducer
});

module.exports = createStore(reducer);
