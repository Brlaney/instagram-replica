import React from 'react';
import { View } from 'react-native';
import BlockedZone from '../svgs/a/BlockedTop';
import styles from '../../styles/styles';

const TopPhoneNav: React.FC<{}> = ({ children, ...props }) => {
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
