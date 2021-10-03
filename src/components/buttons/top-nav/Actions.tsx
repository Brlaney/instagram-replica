import * as React from 'react';
import { View, Text } from 'react-native';
import Bell from './Bell';
import DotNav from './DotNav';
import styles from '../../../styles/styles';

interface Props {
  // Add more prop types here
};

const UserName: React.FC<Props> = ({ ...props }) => {
  return (
    <View style={styles.topNavRightEnd}>

      {/* Right end of the topnav row contains: */}
      <Bell />
      <DotNav />
    </View>
  );
};

export default UserName;
