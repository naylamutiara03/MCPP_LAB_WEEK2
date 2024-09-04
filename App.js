import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen'; // Sesuaikan jalur file ini

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Halaman Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
