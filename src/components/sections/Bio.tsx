import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';

interface Props {
  user: string;
  bio1: string;
  bio2: string;
  bio3: string;
  bio4: string;
};

const Bio: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxd1} {...props}>
      <Text style={styles.header}>
        {props.user}
      </Text>
      <Text style={styles.bio}>
        {props.bio1}
      </Text>
      <Text style={styles.bio}>
        {props.bio2}
      </Text>
      <Text style={styles.bio}>
        {props.bio3}
      </Text>
      <Text style={styles.bio}>
        {props.bio4}
      </Text>
      {children}
    </View>
  );
};

export default Bio;
