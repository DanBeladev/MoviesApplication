import React from 'react';
//first import createStackNavigator from react-navigation
import { NavigationContainer } from '@react-navigation/native';
//then import StackNavigator for creatign nested routes
import { createStackNavigator } from '@react-navigation/stack';
//Import your screens
import MoviesList from './components/MoviesList';
import Movie from './components/Movie/screen';
import Home from './components/Home';

const RootStack = createStackNavigator();

//Define your routes using createStackNavigator, which will be a object full of options.

function AppStack() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Home'>
        <RootStack.Screen
          name='Home'
          component={Home}
          options={{headerShown: false}}
        />
        <RootStack.Screen name='MoviesList' component={MoviesList} />
        <RootStack.Screen name='Movie' component={Movie} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

// //Export default the stateless component
// const App = () => {
//   return <AppStack />;
// };

export default AppStack;
