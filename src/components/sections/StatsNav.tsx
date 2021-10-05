import React from 'react';
import { View, Text } from 'react-native';
import ProfileImageHolder from '../buttons/stats-nav/ProfileImageHolder';
import styles from '../../styles/styles';

interface Props {
  nPosts: string;
  nFollowers: string;
  nFollowing: string;
};

const StatsNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxcRow} {...props}>

      {/* Profile image container */}
      <View style={styles.boxcCol1}>
        <ProfileImageHolder />
      </View>

      {/* User stats display */}
      <View style={styles.boxcCol2}>
        <View style={styles.boxChild1}>
          <Text style={styles.statsTextr1}>
            {props.nPosts}
          </Text>
          <Text style={styles.statsTextr2}>
            Posts
          </Text>
        </View>
        <View style={styles.boxChild2}>
          <Text style={styles.statsTextr1}>
            {props.nFollowers}
          </Text>
          <Text style={styles.statsTextr2}>
            Followers
          </Text>
        </View>
        <View style={styles.boxChild3}>
          <Text style={styles.statsTextr1}>
            {props.nFollowing}
          </Text>
          <Text style={styles.statsTextr2}>
            Following
          </Text>
        </View>
      </View>

      {/* Children components */}
      {children}

    </View>
  );
};

export default StatsNav;
