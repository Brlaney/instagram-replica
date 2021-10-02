import React from "react";
import { View } from "react-native";
import Home from '../buttons/bottom-nav/Home';
import Search from '../buttons/bottom-nav/Search';
import Tv from '../buttons/bottom-nav/Tv';
import Shop from '../buttons/bottom-nav/Shop';
import Profile from '../buttons/bottom-nav/Profile';
import styles from "../../styles/styles";

interface Props {
  // Add more prop types here
};

const BottomNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxh} {...props}>

      {/* All components contained in BottomNav can be
      found in components/buttons/bottom-nav */}
      <Home />
      <Search />
      <Tv />
      <Shop />
      <Profile />

      {/* All child components */}
      {children}
    </View>
  );
};

export default BottomNav;
