'use strict';

import React from 'react-native'

import { createStore, combineReducers } from 'redux';
import playlistReducer from './playlist/reducers/playlist'

const reducer = combineReducers({
  playlist: playlistReducer
});

module.exports = createStore(reducer);
