import React from 'react';
import { View, Text } from 'react-native';
import ProfileImageHolder from '../buttons/stats-nav/ProfileImageHolder';
import styles from '../../styles/styles';

interface Props {
  // Add more prop types here
};

const StatsNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxcRow} {...props}>

      <View style={styles.boxcCol1}>
        {/* Left end of the statsNav row contains: */}
        <ProfileImageHolder />
      </View>

      <View style={styles.boxcCol2}>
        <View style={styles.boxChild1}>
          <Text style={styles.statsTextr1}>
            4,195
          </Text>
          <Text style={styles.statsTextr2}>
            Posts
          </Text>
        </View>
        <View style={styles.boxChild2}>
          <Text style={styles.statsTextr1}>
            10.2M
          </Text>
          <Text style={styles.statsTextr2}>
            Followers
          </Text>
        </View>
        <View style={styles.boxChild3}>
          <Text style={styles.statsTextr1}>
            666
          </Text>
          <Text style={styles.statsTextr2}>
            Following
          </Text>
        </View>
      </View>

      {children}
    </View>
  );
};

export default StatsNav;
