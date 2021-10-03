import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { View } from 'react-native';
import styles from '../../../styles/styles';


interface Props {
  // Add more prop types here  
  switch: number;
};

const colors = [
  '#ffffff',
  '#C4C4C4'
];

const Reel: React.FC<Props> = ({ ...props }) => {
  return (
    <View style={styles.postsNavCenter} {...props}>
      <Svg
        width='388'
        height='125'
        viewBox='0 0 388 125'
        fill='none'
        {...props}
      >
        <Path
          d='M186.5 31L195 40L203.5 31'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='6'
          strokeLinecap='round'
        />
        <Rect
          x='169'
          y='41.5'
          width='52'
          height='52'
          rx='14.5'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='6'
        />
        <Path
          d='M178.5 68.5L195 62.5'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Path
          d='M211.5 66L195 72'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Path
          d='M195 72V62.5'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Rect
          y='119'
          width='388'
          height='3'
          fill={props.switch == 1 ? colors[0] : 'none'}
        />
      </Svg>
    </View>
  );
};

export default Reel;
