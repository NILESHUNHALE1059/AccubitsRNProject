/**
 * @format
 */

import { AppRegistry, Text } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import 'react-native-gesture-handler';

import {
    typography,
    setDefaultFont

} from './utils/typography'

// typography()

setDefaultFont()
AppRegistry.registerComponent(appName, () => App);
