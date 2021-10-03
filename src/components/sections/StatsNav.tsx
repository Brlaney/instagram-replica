import React from 'react';
import { View } from 'react-native';
import ProfileImageHolder from '../buttons/stats-nav/ProfileImageHolder';
import styles from '../../styles/styles';

interface Props {
  // Add more prop types here
};

const StatsNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxc} {...props}>

      {/* Left end of the statsNav row contains: */}
      <ProfileImageHolder />

      {children}
    </View>
  );
};

export default StatsNav;
