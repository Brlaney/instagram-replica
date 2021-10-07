import React from 'react';
import { Pressable } from 'react-native';
import DownArrow from './DownArrow';
import styles from '../../../styles/styles';


const SmallBtn: React.FC<{}> = ({ ...props }) => {

  function handleNothing() {
    return null;
  };

  return (
    <Pressable
      style={styles.smallButton}
      onPress={handleNothing}
    >
      <DownArrow />
  </Pressable>
  );
};

export default SmallBtn;
