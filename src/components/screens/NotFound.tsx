import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../lib/types';
import styles from '../../styles/notfound';

export default function NotFound({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This screen doesn't exist.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.replace('Root')}
        style={styles.link}
      >
        <Text style={styles.linkText}>
          Go to home screen!
        </Text>
      </TouchableOpacity>
    </View>
  )
};
