import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

const DotNav: React.FC<{}> = ({ ...props }) => {
  return (
    <Svg
      width='100'
      height='105'
      viewBox='0 0 100 105'
      fill='none'
      {...props}
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
