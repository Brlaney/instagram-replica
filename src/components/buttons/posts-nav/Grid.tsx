import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { View } from 'react-native';
import styles from '../../../styles/styles';

interface Props {
  switch: number;
};

const colors = [
  '#ffffff',
  '#C4C4C4'
];

const Grid: React.FC<Props> = ({ ...props }) => {
  return (
    <View style={styles.postsNavLeft} {...props}>
      <Svg
        width='338'
        height='125'
        viewBox='0 0 338 125'
        fill='none'
        {...props}
      >
        <Rect
          x='167'
          y='35'
          width='54'
          height='54'
          rx='2'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='6'
        />
        <Path
          d='M168 53H220'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='6'
        />
        <Path
          d='M168 71H220'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='6'
        />
        <Path
          d='M185 88V36'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='6'
        />
        <Path
          d='M203 88V36'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='6'
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

export default Grid;
