import React from "react";
import { View } from "react-native";
import Holder from '../svgs/e/Reel';
import styles from "../../styles/styles";

const Reels: React.FC<{}> = ({ children, ...props }) => {
  return (
    <View style={styles.boxe} {...props}>

       {/* All components contained in the reels 
       component (box e) components/buttons/reels */}
      <Holder />

      {/* All child components */}
      {children}
    </View>
  );
};

export default Reels;
