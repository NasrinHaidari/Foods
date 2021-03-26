import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home'
import Detail from './Screens/Detail'

import { NavigationContainer } from '@react-navigation/native' // NavigationContainer is parent of Navigation
import { createStackNavigator} from '@react-navigation/stack' // Top Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' // bottom Navigation
import { MaterialCommunityIcons } from '@expo/vector-icons' // use icon in bottom Navigation

// use variable to call them in many page
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    // make bottom navigator and it components and set stack and screen that use in component
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Food"
        tabBarOptions= {{
          activeTintColor: "#841548"
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name= "home"
                color={color}
                size={size}
              />
            )
          }}
        >

        </Tab.Screen>
      </Tab.Navigator>

    </NavigationContainer>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
    initialRouteName= "Home"
    screenOptions= {{
      headerStyle: {backgroundColor: "#841548"},
      headerTintColor: "#fff",
      headerTitleStyle: {fontWeight: "bold"}
    }}
    >
      <Stack.Screen
        name="Home" // Route name
        component={Home} // Page that should show
        options={{title: "Home Page"}}
      />

      <Stack.Screen
        name="Detail"
        component= {Detail}
      />

    </Stack.Navigator>
  )
}


const styles = StyleSheet.create({
 
});
