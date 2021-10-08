import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import Colors from '../lib/constants/Colors';
// import useColorScheme from '../lib/hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
} from '../lib/types';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  // const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator initialRouteName='TabOne' screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name='TabOne'
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='TabTwo'
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='ios-code' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
};

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name']
  color: string
}) {
  return <Ionicons
    size={30}
    style={{ marginBottom: -3 }}
    {...props}
  />
};

/* Each tab has its own navigation stack, you can read more about this pattern here:
https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab */
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator screenOptions={{ headerShown: false }}>
      <TabOneStack.Screen
        name='TabOneScreen'
        component={TabOneScreen}
      />
    </TabOneStack.Navigator>
  )
};

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator screenOptions={{ headerShown: false }}>
      <TabTwoStack.Screen
        name='TabTwoScreen'
        component={TabTwoScreen}
      />
    </TabTwoStack.Navigator>
  )
};