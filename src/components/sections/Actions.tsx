import React from 'react';
import { View } from 'react-native';
import WideBtn from '../svgs/d/WideBtn';
import SmallBtn from '../svgs/d/SmallBtn';
import styles from '../../styles/styles';

const Actions: React.FC<{}> = ({ children, ...props }) => {
  return (
    <View style={styles.boxd2} {...props}>

      {/* Three wide buttons */}
      <WideBtn index={1} btnText='Following' />
      <WideBtn index={2} btnText='Message' />
      <WideBtn index={3} btnText='Email' />

      {/* One small dropdown button */}
      <SmallBtn />

      {children}
    </View>
  );
};

export default Actions;
