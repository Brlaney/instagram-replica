import * as React from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';

const Reel: React.FC<{}> = ({ ...props }) => {
  return (
    <Svg
      width='276'
      height='331'
      viewBox='0 0 276 331'
      fill='none'
      {...props}
    >
      <Rect
        width='276'
        height='331'
        fill='black'
      />
      <Circle
        cx='138'
        cy='122'
        r='95'
        stroke='#555555'
        strokeWidth='2'
      />
      <Circle
        cx='138'
        cy='122'
        r='83'
        stroke='#555555'
        strokeWidth='2'
      />
    </Svg>
  );
};

export default Reel;