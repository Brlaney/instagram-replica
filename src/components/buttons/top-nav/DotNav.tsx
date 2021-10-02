import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

interface Props {
  // Add more prop types here
};

/* 
  stroke={props.iconState.active ? 'white' : '#C4C4C4'} 
*/

const DotNav: React.FC<Props> = ({ ...props }) => {
  return (
    <Svg
      width='100'
      height='105'
      viewBox='0 0 100 105'
      fill='none'
    >
      <Circle
        cx='66'
        cy='53'
        r='5'
        fill='white'
      />
      <Circle
        cx='50'
        cy='53'
        r='5'
        fill='white'
      />
      <Circle
        cx='34'
        cy='53'
        r='5'
        fill='white'
      />
    </Svg>
  );
};

export default DotNav;
