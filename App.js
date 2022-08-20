import React from 'react';
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "./src/context/BlogContext";
import { StatusBar } from 'expo-status-bar';
import PlusButton from './src/components/PlusButton';

const Stack = createNativeStackNavigator();

export function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='IndexScreen'
        component={IndexScreen}
        options={{
          title: 'Blogs',
          headerTitleAlign: 'center',
          headerRight: () => (
            <PlusButton/>
          )
        }}
        />
        <Stack.Screen 
        name='ShowScreen'
        component={ShowScreen}
        options={{
          title: 'Details',
          headerTitleAlign: 'center',
        }}
        />
        <Stack.Screen
        name='CreateScreen'
        component={CreateScreen}
        options={{
          title: 'Create',
          headerTitleAlign: 'center',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default () => {
  return (
    <Provider>
      <StatusBar style='dark'/>
      <App/>
    </Provider>
  )
}