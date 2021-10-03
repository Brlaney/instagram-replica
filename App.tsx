import React from 'react';
import { View, Text } from 'react-native';

// Components are styled as a, b, c, d1, d2, e, f, g, & h respectively
import TopPhoneNav from './src/components/sections/TopPhoneNav';
import TopNav from './src/components/sections/TopNav';
import StatsNav from './src/components/sections/StatsNav';
import Bio from './src/components/sections/Bio';
import Actions from './src/components/sections/Actions';
import Reels from './src/components/sections/Reels';
import PostsNav from './src/components/sections/PostsNav';
import Posts from './src/components/sections/Posts';
import BottomNav from './src/components/sections/BottomNav';

import styles from './src/styles/styles';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Box-a | iPhone top nav */}
      <TopPhoneNav />

      {/* TopNav component | Box-b */}
      <TopNav user='Brlaney94' verified={true} />

      {/* Box-c | profile image badge - posts - followers - following */}
      <StatsNav />

      {/* Box-d | user bio */}
      <Bio>
        <Text style={styles.boxText}>Bio</Text>
      </Bio>

      {/* Box-d | following btn - message btn - email btn - dropdown btn */}
      <Actions />

      {/* Box-e | reels */}
      <Reels />

      {/* PostsNav component | Box-f */}
      <PostsNav activeComponent={0} />

      {/* Box-g | posts */}
      <Posts />

      {/* BottomNav component | Box-h */}
      <BottomNav />

    </View>
  );
}
