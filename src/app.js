import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LearningMaterialScreen from './src/screens/LearningMaterialScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Quiz" component={QuizScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
          <Stack.Screen name="LearningMaterial" component={LearningMaterialScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
