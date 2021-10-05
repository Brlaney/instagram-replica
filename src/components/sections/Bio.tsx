import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';

interface Props {
  user: string;
  bio1: string;
  bio2: string;
  f1: string;
  f2: string;
  nOthers: number;
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
      <Text style={styles.bioLink}>
        {props.bio2}
      </Text>
      <Text style={styles.bio}>
        Followed by
        <Text style={{ fontWeight: 'bold' }}> {props.f1},</Text>
        <Text style={{ fontWeight: 'bold' }}> {props.f2},</Text> and
        <Text style={{ fontWeight: 'bold' }}> {props.nOthers} others</Text>
      </Text>
      {children}
    </View>
  );
};

export default Bio;
