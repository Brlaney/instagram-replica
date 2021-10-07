import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DownArrow: React.FC<{}> = ({ ...props }) => {
  return (
    <Svg
      width='96'
      height='96'
      viewBox='0 0 96 96'
      fill='none'
      {...props}
    >
      <Path
        d='M38 43L47.5 52'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
      <Path
        d='M57 43L47.5 52'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
    </Svg>
  );
};

export default DownArrow;
