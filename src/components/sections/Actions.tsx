import React from "react";
import { View } from "react-native";
import styles from "../../styles/styles";

interface Props {
  // Add more prop types here
};

const Actions: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxd2} {...props}>
      {children}
    </View>
  );
};

export default Actions;
