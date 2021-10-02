import React from "react";
import { View } from "react-native";
import styles from "../../styles/styles";

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
};

const PostsNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxf} {...props}>
      {children}
    </View>
  );
};

export default PostsNav;
