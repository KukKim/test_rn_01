import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  HomeScreen,
  TestScreen,
  TestStyleScreen,
  TestGestureHandlerScreen,
  TestReanimatedScreen,
} from './src/screens';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <GestureHandlerRootView>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="TestStyle" component={TestStyleScreen} />
        <Stack.Screen
          name="TestGestureHandler"
          component={TestGestureHandlerScreen}
        />
        <Stack.Screen name="TestReanimated" component={TestReanimatedScreen} />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
