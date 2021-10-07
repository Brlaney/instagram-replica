import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotFoundScreen from '../screens/NotFound';
import { RootStackParamList } from '../../lib/types';
import Navigate from './Navigate';
import LinkingConfiguration from './LinkingConfiguration';

/* If you are not familiar with React Navigation, we recommend going through the
  'Fundamentals' guide: https://reactnavigation.org/docs/getting-started */
export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  )
};

/* A root stack navigator is often used for displaying modals on top of all other content
  Read more here: https://reactnavigation.org/docs/modal */
const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Root' component={Navigate} />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  )
};