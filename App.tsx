import React from 'react';
import { View, Text } from 'react-native';
import styles from './src/styles/styles';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Box-a */}
      <View style={styles.boxa}>
        <Text style={styles.boxText}>a</Text>
      </View>

      {/* Box-b */}
      <View style={styles.boxb}>
        <Text style={styles.boxText}>b</Text>
      </View>

      {/* Box-c */}
      <View style={styles.boxc}>
        <Text style={styles.boxText}>c</Text>
      </View>

      {/* Box-d */}
      <View style={styles.boxd}>
        <Text style={styles.boxText}>d</Text>
      </View>

      {/* Box-e */}
      <View style={styles.boxe}>
        <Text style={styles.boxText}>e</Text>
      </View>

      {/* Box-f */}
      <View style={styles.boxf}>
        <Text style={styles.boxText}>f</Text>
      </View>

      {/* Box-g */}
      <View style={styles.boxg}>
        <Text style={styles.boxText}>g</Text>
      </View>

      {/* Box-h */}
      <View style={styles.boxh}>
        <Text style={styles.boxText}>h</Text>
      </View>

    </View>
  );
}
