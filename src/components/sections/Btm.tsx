import React from 'react';
import BottomZone from '../buttons/phone-no-zone/BottomZone';
import { View } from 'react-native';
import styles from '../../styles/styles';

interface Props {
  // Add more prop types here
};

const Btm: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.bottomNoZone} {...props}>

      <BottomZone />
      {children}
    </View>
  );
};

export default Btm;
