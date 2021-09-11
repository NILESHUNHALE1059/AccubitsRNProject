/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from './src/Screens/LoginScreen';
import DashBoard from './src/Screens/Dashboard';


const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{ headerShown: false }}
        initialRouteName="LoginScreen">

        {/* <Stack.Screen name="Main" component={Main} options={{ headerTitle: "Marvel", }} />

        <Stack.Screen name="TooltipCopilot" component={TooltipCopilot} /> */}

        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="DashBoard" component={DashBoard} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
