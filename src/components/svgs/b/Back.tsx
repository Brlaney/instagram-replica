import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import styles from '../../../styles/styles';

interface Props {
  // Add more prop types here
};

const Back: React.FC<Props> = ({ ...props }) => {
  return (
    <View style={styles.topNavLeftEnd}>
      <Svg
        width='118'
        height='105'
        viewBox='0 0 118 105'
        fill='none'
        {...props}
      >
        <Path
          d='M72.5 25L46 52'
          stroke='#FAFAFA'
          strokeWidth='7'
          strokeLinecap='round'
        />
        <Path
          d='M46 52L72.5 79.5'
          stroke='#FAFAFA'
          strokeWidth='7'
          strokeLinecap='round'
        />
      </Svg>
    </View>
  );
};

export default Back;
