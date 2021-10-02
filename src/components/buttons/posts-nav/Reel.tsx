import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

interface Props {
  // Add more prop types here
};

const Reel: React.FC<Props> = ({ ...props }) => {
  return (
    <Svg
      width='388'
      height='125'
      viewBox='0 0 388 125'
      fill='none'
      {...props}
    >
      <Path
        d='M186.5 31L195 40L203.5 31'
        stroke='white'
        strokeWidth='6'
        strokeLinecap='round'
      />
      <Rect
        x='169'
        y='41.5'
        width='52'
        height='52'
        rx='14.5'
        stroke='white'
        strokeWidth='6'
      />
      <Path
        d='M178.5 68.5L195 62.5'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
      <Path
        d='M211.5 66L195 72'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
      <Path
        d='M195 72V62.5'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
    </Svg>
  );
};

export default Reel;
