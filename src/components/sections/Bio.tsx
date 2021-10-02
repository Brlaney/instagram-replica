import React from "react";
import { View } from "react-native";
import styles from "../../styles/styles";

interface Props {
  // Add more prop types here
};

const Bio: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxd1} {...props}>
      {children}
    </View>
  );
};

export default Bio;
