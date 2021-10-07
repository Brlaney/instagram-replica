import React from 'react';
import { View } from 'react-native';
import Home from '../svgs/h/Home';
import Search from '../svgs/h/Search';
import Tv from '../svgs/h/Tv';
import Shop from '../svgs/h/Shop';
import Profile from '../svgs/h/Profile';
import styles from '../../styles/styles';

const BottomNav: React.FC<{}> = ({ children, ...props }) => {
  return (
    <View style={styles.boxh} {...props}>

      {/* All components contained in BottomNav can be
      found in components/svgs/h */}
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
