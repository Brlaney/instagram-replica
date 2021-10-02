import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

interface Props {
  // Add more prop types here
};

const Verified: React.FC<Props> = ({ ...props }) => {
  return (
    <Svg
      width='36'
      height='36'
      viewBox='0 0 36 36'

      fill='none'
      {...props}
    >
      <Rect
        x='4.75836'
        y='4.7583'
        width='26'
        height='26'
        fill='#3797F0'
      />
      <Rect
        x='13.0001'
        width='26'
        height='26'
        transform='rotate(30 13.0001 0)'
        fill='#3797F0'
      />
      <Rect
        y='13' width='26' height='26'
        transform='rotate(-30 0 13)'
        fill='#3797F0'
      />
      <Path
        d='M24.7584 14.7583L16.2584 22.7583'
        stroke='black'
        stroke-width='4'
        stroke-linecap='round'
      />
      <Path
        d='M11.7584 18.7583L16.2584 22.7583'
        stroke='black'
        stroke-width='4'
        stroke-linecap='round'
      />
    </Svg>
  );
};

export default Verified;
