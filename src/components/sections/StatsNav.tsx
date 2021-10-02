import React from "react";
import { View } from "react-native";
import styles from "../../styles/styles";

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
};

const StatsNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxc} {...props}>
      {children}
    </View>
  );
};

export default StatsNav;
