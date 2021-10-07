import React from 'react';
import BottomZone from '../svgs/i/BlockedBottom';
import { View } from 'react-native';
import styles from '../../styles/styles';

const Btm: React.FC<{}> = ({ children, ...props }) => {
  return (
    <View style={styles.bottomNoZone} {...props}>
      <BottomZone />
      {children}
    </View>
  );
};

export default Btm;
