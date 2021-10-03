import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SmallArrow: React.FC<{}> = ({ ...props }) => {
  return (
    <Svg
      width='45'
      height='96'
      viewBox='0 0 45 96'
      fill='none'
      {...props}
    >
      <Path
        d='M13 44.5L22.5 53.5'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
      <Path
        d='M32 44.5L22.5 53.5'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
    </Svg>
  );
};

export default SmallArrow;
