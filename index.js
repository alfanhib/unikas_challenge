/** @format */

import React from 'react'
import {AppRegistry} from 'react-native';
import { Root } from 'native-base'
import {name as appName} from './app.json';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducers from './app/reducers'
import AppNavigator from './AppNavigator'

const store = createStore(rootReducers, applyMiddleware(thunk))

const App = () => (
    <Provider>
        <Root>
            <AppNavigator/>
        </Root>
    </Provider>
)

AppRegistry.registerComponent(appName, () => App);
