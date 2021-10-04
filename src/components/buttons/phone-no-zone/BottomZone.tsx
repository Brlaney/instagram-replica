import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BottomZone: React.FC<{}> = ({ ...props }) => {
  return (
    <Svg
      width='1171'
      height='96'
      viewBox='0 0 1171 96'
      fill='none'
      {...props}
    >
      <Path
        d='M383 63.5H787'
        stroke='#eeeeee'
        strokeWidth='15'
        strokeLinecap='round'
      />
    </Svg>
  );
};

export default BottomZone;
