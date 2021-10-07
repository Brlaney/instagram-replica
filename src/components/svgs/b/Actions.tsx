import * as React from 'react';
import { View } from 'react-native';
import Bell from './Bell';
import DotNav from './DotNav';
import styles from '../../../styles/styles';

const UserName: React.FC<{}> = ({ ...props }) => {
  return (
    <View style={styles.topNavRightEnd} {...props}>

      {/* Right end of the topnav row contains: */}
      <Bell />
      <DotNav />
    </View>
  );
};

export default UserName;
