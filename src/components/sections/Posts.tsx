import React from 'react';
import { View } from 'react-native';
import styles from '../../styles/styles';

const Posts: React.FC<{}> = ({ children, ...props }) => {
  return (
    <View style={styles.boxg} {...props}>

      {/* Three rows of: left post, middle post,
      and right post (each 388px x 388px) */}
      <View style={styles.postsLeft} />
      <View style={styles.postsMiddle} />
      <View style={styles.postsRight} />

      <View style={styles.postsLeft} />
      <View style={styles.postsMiddle} />
      <View style={styles.postsRight} />

      {/* The third rows overflow should be hidden */}
      <View style={styles.postsLeft} />
      <View style={styles.postsMiddle} />
      <View style={styles.postsRight} />
      

      {children}
    </View>
  );
};

export default Posts;
