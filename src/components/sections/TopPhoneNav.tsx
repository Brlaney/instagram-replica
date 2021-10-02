import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/styles";

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
};


const TopPhoneNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxa}>
      <Text style={styles.boxText} {...props}>
        {children}
      </Text>
    </View>
  );
};

export default TopPhoneNav;
