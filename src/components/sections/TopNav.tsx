import React from 'react';
import { View } from 'react-native';
import Back from '../svgs/b/Back';
import Actions from '../svgs/b/Actions';
import UserName from '../svgs/b/UserName';
import styles from '../../styles/styles';

interface Props {
  user: string;
  verified: boolean;
};

const TopNav: React.FC<Props> = ({ children, ...props }) => {
  
  return (
    <View style={styles.boxb} {...props}>

      {/* All components contained in the top-nav 
      component (box b) components/svgs/b/ */}
      <Back />
      <UserName user={props.user} verified={props.verified} />
      <Actions />

      {/* All child components */}
      {children}
    </View>
  );
};

export default TopNav;
