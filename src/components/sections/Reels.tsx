import React from "react";
import { View } from "react-native";
import Holder from '../buttons/reels/Holder';
import styles from "../../styles/styles";

interface Props {
  // Add more prop types here
};

const Reels: React.FC<Props> = ({ children, ...props }) => {
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
