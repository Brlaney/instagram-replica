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
      <TopPhoneNav>
        <Text style={styles.boxText}>Blocked zone</Text>
      </TopPhoneNav>

      {/* Box-b | Back arrow - username - bell - menu dots */}
      <TopNav />

      {/* Box-c | profile image badge - posts - followers - following */}
      <StatsNav>
        <Text style={styles.boxText}>Stats</Text>
      </StatsNav>

      {/* Box-d | user bio */}
      <Bio>
        <Text style={styles.boxText}>Bio</Text>
      </Bio>

      {/* Box-d | following btn - message btn - email btn - dropdown btn */}
      <Actions>
        <Text style={styles.boxText}>Actions</Text>
      </Actions>

      {/* Box-e | reels */}
      <Reels>
        <Text style={styles.boxText}>Reels</Text>
      </Reels>

      {/* Box-f | posts grid - reels icon - tagged images badge */}
      <PostsNav>
        <Text style={styles.boxText}>Posts nav</Text>
      </PostsNav>

      {/* Box-g | posts */}
      <Posts>
        <Text style={styles.boxText}>Posts</Text>
      </Posts>

      {/* Box-h | bottom nav home - search - tv - shopping - profile badge */}
      <BottomNav />

    </View>
  );
}
