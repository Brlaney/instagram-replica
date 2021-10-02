import React from "react";
import { View } from "react-native";
import styles from "../../styles/styles";

interface Props {
  // Add more prop types here
};

const TopPhoneNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxa} {...props}>
      {children}
    </View>
  );
};

export default TopPhoneNav;
