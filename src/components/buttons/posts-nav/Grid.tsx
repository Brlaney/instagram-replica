import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

interface Props {
  // Add more prop types here
};

/* 
  stroke={props.iconState.active ? 'white' : '#C4C4C4'} 
*/

const Grid: React.FC<Props> = ({ ...props }) => {
  return (
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
        stroke='white'
        strokeWidth='6'
      />
      <Path
        d='M168 53H220'
        stroke='white'
        strokeWidth='6'
      />
      <Path
        d='M168 71H220'
        stroke='white'
        strokeWidth='6'
      />
      <Path
        d='M185 88V36'
        stroke='white'
        strokeWidth='6'
      />
      <Path
        d='M203 88V36'
        stroke='white'
        strokeWidth='6'
      />
    </Svg>
  );
};

export default Grid;
