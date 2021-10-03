import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

interface Props {
  // Add more prop types here
};

const Verified: React.FC<Props> = ({ ...props }) => {
  return (
    <Svg
      width='57'
      height='57'
      viewBox='0 0 57 57'

      fill='none'
      {...props}
    >
      <Rect
        x='14.7584'
        y='14.7583'
        width='26'
        height='26'
        fill='#3797F0'
      />
      <Rect
        x='23.0001'
        y='10'
        width='26'
        height='26'
        transform='rotate(30 23.0001 10)'
        fill='#3797F0'
      />
      <Rect
        x='10'
        y='23'
        width='26'
        height='26'
        transform='rotate(-30 10 23)'
        fill='#3797F0'
      />
      <Path
        d='M34.7584 24.7583L26.2584 32.7583'
        stroke='black'
        strokeWidth='4'
        strokeLinecap='round'
      />
      <Path
        d='M21.7584 28.7583L26.2584 32.7583'
        stroke='black'
        strokeWidth='4'
        strokeLinecap='round'
      />
    </Svg>
  );
};

export default Verified;
