import * as React from 'react';
import { View, Text } from 'react-native';
import VerifiedCheck from '../top-nav/VerifiedCheck';
import styles from '../../../styles/styles';

interface Props {
  // Add more prop types here
  user: string;
  verified: boolean;
};

const UserName: React.FC<Props> = ({ ...props }) => {
  return (
    <View style={styles.topNavMiddle}>

      {/* Props input: username display dynamically */}
      <Text style={styles.username}>
        {props.user}
      </Text>

      {/* If user is verified display the blue check */}
      {props.verified ? <VerifiedCheck /> : null}
    </View>
  );
};

export default UserName;
