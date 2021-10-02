import React from "react";
import { View } from "react-native";
import styles from "../../styles/styles";
import Home from '../icons/Home';
import Search from '../icons/Search';
import Tv from '../icons/Tv';
import Shop from '../icons/Shop';
import UserBadge from '../icons/UserBadge';

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
};

const BottomNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxh} {...props}>
      <Home />
      <Search />
      <Tv />
      <Shop />
      <UserBadge />
      {children}
    </View>
  );
};

export default BottomNav;
