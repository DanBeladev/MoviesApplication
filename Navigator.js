import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CONSTANTS from './constants';
import MoviesList from './components/MoviesList';
import Movie from './components/Movie/screen';
import Home from './components/Home';

const RootStack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={CONSTANTS.SCREENS.HOME}
        options={{ headerShown: false }}
      >
        <RootStack.Screen
          name={CONSTANTS.SCREENS.HOME}
          component={Home}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={CONSTANTS.SCREENS.MOVIES_LIST}
          component={MoviesList}
          options={CONSTANTS.MOVIES_LIST_HEADER_PROPPERTIES}
        />
        <RootStack.Screen
          name={CONSTANTS.SCREENS.MOVIE}
          component={Movie}
          options={CONSTANTS.MOVIES_DETAILS_HEADER_PROPPERTIES}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
