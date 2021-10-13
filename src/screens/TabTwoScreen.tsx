import * as React from 'react';
import { View } from 'react-native';

/* Sections components correspond to svg components
as a, b, c, d1, d2, e, f, g, h, & i respectively.  */
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

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>

      {/* Box a. | iPhone top nav */}
      <TopPhoneNav />

      {/* Box b. | TopNav component */}
      <TopNav user='Search' verified={false} />

      {/* Box c. | profile image badge - posts - followers - following */}
      <StatsNav
        nPosts='6,050'
        nFollowers='272M'
        nFollowing='443'
      />

      {/* Box d1. | user bio */}
      <Bio
        user={data.user}
        bio1={data.bio1}
        bio2={data.bio2}
        f1={data.f1}
        f2={data.f2}
        nOthers={data.nOthers}
      />

      {/* Box d2. | following btn - message btn - email btn - dropdown btn */}
      <Actions />

      {/* Box e. | reels */}
      <Reels />

      {/* Box f. | PostsNav component */}
      <PostsNav activeComponent={1} />

      {/* Box g. | posts */}
      <Posts />

      {/* Box h. | BottomNav component */}
      <BottomNav />

      {/* Box i. | bottom of device */}
      <Btm />
    </View>
  );
};
