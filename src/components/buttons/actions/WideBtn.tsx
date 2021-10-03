import React from 'react';
import { Text, Pressable } from 'react-native';
import SmallArrow from './SmallArrow';
import styles from '../../../styles/styles';

interface Props {
  index: number;
  btnText: string;
};

const WideBtn: React.FC<Props> = ({ ...props }) => {

  function handleNothing() {
    return null;
  };

  return (
    <Pressable
      style={styles.wideButton}
      onPress={handleNothing}
      {...props}
    >
      <Text style={styles.buttonText}>
        {props.btnText}
      </Text>
      {props.index == 1 ? <SmallArrow /> : null}
    </Pressable>
  );
};

export default WideBtn;
