import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  // Add more prop types here
};

const Back: React.FC<Props> = ({ ...props }) => {
  return (
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
  );
};

export default Back;
