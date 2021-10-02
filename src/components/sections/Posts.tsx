import React from "react";
import { View } from "react-native";
import styles from "../../styles/styles";

interface Props {
  // Add more prop types here
};

const Posts: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxg} {...props}>
      {children}
    </View>
  );
};

export default Posts;
