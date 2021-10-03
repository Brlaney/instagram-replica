import React from 'react';
import { View } from 'react-native';
import BlockedZone from '../buttons/top-phone-nav/BlockedZone';
import styles from '../../styles/styles';

interface Props {
  // Add more prop types here
};

const TopPhoneNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxa} {...props}>

      {/* The top-phone-nav placeholder can be found
      in the src/components/top-phone-nav/ directory */}
      <BlockedZone />

      {children}
    </View>
  );
};

export default TopPhoneNav;
