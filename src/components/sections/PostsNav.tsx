import React from "react";
import { View } from "react-native";
import Grid from '../buttons/posts-nav/Grid';
import Reel from '../buttons/posts-nav/Reel';
import Tagged from '../buttons/posts-nav/Tagged';
import styles from "../../styles/styles";

interface Props {
  // Add more prop types here
};

const PostsNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxf} {...props}>

      {/* All components contained in PostsNav can be
      found in components/buttons/posts-nav */}
      <Grid />
      <Reel />
      <Tagged />

      {/* All child components */}
      {children}
    </View>
  );
};

export default PostsNav;
