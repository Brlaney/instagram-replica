import React from "react";
import { View } from "react-native";
import styles from "../../styles/styles";
import Back from '../buttons/top-nav/Back';

interface Props {
  // Add more prop types here
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
