import React from "react";
import { View } from "react-native";
import styles from "../../styles/styles";

interface Props {
  // Add more prop types here
};

const StatsNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxc} {...props}>
      {children}
    </View>
  );
};

export default StatsNav;
