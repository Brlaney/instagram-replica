import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../lib/constants/Colors';
import useColorScheme from '../lib/hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import TabFiveScreen from '../screens/TabFiveScreen';
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
  TabFourParamList,
  TabFiveParamList,
} from '../lib/types';
import Home from '../components/svgs/h/Home';
import Search from '../components/svgs/h/Search';
import Tv from '../components/svgs/h/Tv';
import Shop from '../components/svgs/h/Shop';
import Profile from '../components/svgs/h/Profile';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='TabOne'
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen
        name='TabOne'
        component={TabOneNavigator}
        options={{ tabBarIcon: ({ }) => (<Home />) }}
      />
      <BottomTab.Screen
        name='TabTwo'
        component={TabTwoNavigator}
        options={{ tabBarIcon: ({ }) => (<Search />) }}
      />
      <BottomTab.Screen 
        name='TabThree'
        component={TabThreeNavigator}
        options={{ tabBarIcon: ({ }) => (<Tv />) }}
      />
      <BottomTab.Screen 
        name='TabFour'
        component={TabFourNavigator}
        options={{ tabBarIcon: ({ }) => (<Shop />) }}
      />
      <BottomTab.Screen 
        name='TabFive'
        component={TabFiveNavigator}
        options={{ tabBarIcon: ({ }) => (<Profile />) }}
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
const TabTwoStack = createStackNavigator<TabTwoParamList>();
const TabThreeStack = createStackNavigator<TabThreeParamList>();
const TabFourStack = createStackNavigator<TabFourParamList>();
const TabFiveStack = createStackNavigator<TabFiveParamList>();

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

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator screenOptions={{ headerShown: false }}>
      <TabThreeStack.Screen
        name='TabThreeScreen'
        component={TabThreeScreen}
      />
    </TabThreeStack.Navigator>
  )
};

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator screenOptions={{ headerShown: false }}>
      <TabFourStack.Screen
        name='TabFourScreen'
        component={TabFourScreen}
      />
    </TabFourStack.Navigator>
  )
};

function TabFiveNavigator() {
  return (
    <TabFiveStack.Navigator screenOptions={{ headerShown: false }}>
      <TabFiveStack.Screen
        name='TabFiveScreen'
        component={TabFiveScreen}
      />
    </TabFiveStack.Navigator>
  )
};
