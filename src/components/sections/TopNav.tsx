import React from "react";
import { View } from "react-native";
import styles from "../../styles/styles";
import Back from '../icons/Back';

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
};

const TopNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxb} {...props}>
      <Back />
      {children}
    </View>
  );
};

export default TopNav;
