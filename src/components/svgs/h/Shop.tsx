import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Shop: React.FC<{}> = ({ ...props }) => {
  return (
    <Svg
      width='234'
      height='155'
      viewBox='0 0 234 155'
      fill='none'
      {...props}
    >
      <Path
        d='M0 0H234V158.5H0V0Z'
        fill='black'
      />
      <Path
        d='M106.019 62.5C107.019 77 126.019 77 127.019 62.5'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
      <Path
        d='M106.019 48.875C107.019 34.375 126.019 34.375 127.019 48.875'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
      <Path
        d='M116.519 52.5H96.283C91.019 52.5 89.519 54 89.0189 61L88.5189 74L88.019 84.5C87.519 98.5 97.019 101 103.519 101H116.519'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
      <Path
        d='M116.519 52.5H136.755C142.019 52.5 143.519 54 144.019 61L144.519 74L145.019 84.5C145.519 98.5 136.019 101 129.519 101H116.519'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
    </Svg>
  )
};

export default Shop;
