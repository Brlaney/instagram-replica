import React from 'react';
import { View } from 'react-native';

// Components are styled as a, b, c, d1, d2, e, f, g, & h respectively
import TopPhoneNav from '../components/sections/TopPhoneNav';
import TopNav from '../components/sections/TopNav';
import StatsNav from '../components/sections/StatsNav';
import Bio from '../components/sections/Bio';
import Actions from '../components/sections/Actions';
import Reels from '../components/sections/Reels';
import PostsNav from '../components/sections/PostsNav';
import Posts from '../components/sections/Posts';
import BottomNav from '../components/sections/BottomNav';
import Btm from '../components/sections/Btm';
import { data } from '../lib/data';
import styles from '../styles/styles';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>

      {/* Box-a | iPhone top nav */}
      <TopPhoneNav />

      {/* TopNav component | Box-b */}
      <TopNav user='Watch TV' verified={false} />

      {/* Box-c | profile image badge - posts - followers - following */}
      <StatsNav
        nPosts='6,050'
        nFollowers='272M'
        nFollowing='443'
      />

      {/* Box-d | user bio */}
      <Bio
        user={data.user}
        bio1={data.bio1}
        bio2={data.bio2}
        f1={data.f1}
        f2={data.f2}
        nOthers={data.nOthers}
      />

      {/* Box-d | following btn - message btn - email btn - dropdown btn */}
      <Actions />

      {/* Box-e | reels */}
      <Reels />

      {/* PostsNav component | Box-f */}
      <PostsNav activeComponent={1} />

      {/* Box-g | posts */}
      <Posts />

      {/* BottomNav component | Box-h */}
      <BottomNav />

      {/* No zone | bottom of device */}
      <Btm />
    </View>
  );
}
