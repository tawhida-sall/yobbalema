import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import PrendreBus from './src/screens/PrendreBus';
import PreferenceBus from './src/screens/PreferenceBus';
import InfosDuTer from './src/screens/InfosDuTer';
import MesRecus from './src/screens/MesRecus';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="PrendreTER" component={PrendreBus} />
        <Tab.Screen name="PreferenceTER" component={PreferenceBusStack} />
        <Tab.Screen name="InfosDuTer" component={InfosDuTerStack} />
        <Tab.Screen name="MesRecus" component={MesRecusStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Stack navigator pour la page PreferenceBus
const PreferenceBusStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PreferenceBus" component={PreferenceBus} />
    </Stack.Navigator>
  );
};

// Stack navigator pour la page InfosDuTer
const InfosDuTerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InfosDuTer" component={InfosDuTer} />
    </Stack.Navigator>
  );
};

// Stack navigator pour la page MesRecus
const MesRecusStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MesRecus" component={MesRecus} />
    </Stack.Navigator>
  );
};


export default App;