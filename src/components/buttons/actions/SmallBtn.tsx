import React from 'react';
import { Pressable } from 'react-native';
import DownArrow from './DownArrow';
import styles from '../../../styles/styles';

interface Props {
  // Any props passed must be typed here
};

const SmallBtn: React.FC<Props> = ({ ...props }) => {

  function handleNothing() {
    return null;
  };

  return (
    <Pressable
      style={styles.wideButton}
      onPress={handleNothing}
      {...props}
    >
      <DownArrow />
  </Pressable>
  );
};

export default SmallBtn;
