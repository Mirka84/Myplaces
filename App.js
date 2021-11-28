// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from './Map';
import Myplaces from './Myplaces'; 




const Stack = createNativeStackNavigator();

function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="MY PLACES" component={Myplaces} />
      <Stack.Screen name="MAP" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;