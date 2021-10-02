import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  // Add more prop types here
};

/* 
  stroke={props.iconState.active ? 'white' : '#C4C4C4'} 
*/

const Bell: React.FC<Props> = ({ ...props }) => {
  return (
    <Svg
      width='122'
      height='105'
      viewBox='0 0 122 105'
      fill='none'
      {...props}
    >
      <Path
        d='M61 77H89C91 77 90 77 87 75C84 73 84 71.5 84 68.5C84 66.6444 84 64 84 61V53C84 48 83.2717 46.5638 81.5 43.5C75.8741 33.771 66 29 61 29'
        stroke='white'
        strokeWidth='6'
      />
      <Path
        d='M61.0405 77H33.0405C31.0405 77 32.0405 77 35.0405 75C38.0405 73 38.0405 71.5 38.0405 68.5C38.0405 66.6444 38.0405 64 38.0405 61V53C38.0405 48 38.7689 46.5638 40.5405 43.5C46.1664 33.771 56.0405 29 61.0405 29'
        stroke='white'
        strokeWidth='6'
      />
      <Path
        d='M56 29.75C58 24.75 64 24.75 66 29.7499'
        stroke='white'
        strokeWidth='6'
      />
      <Path
        d='M61.0001 89C58 89 54 88 54 84C54 83 54 83 55 83H61H67C68 83.0001 68 83 68 84C68 88 64 89 61.0001 89Z'
        fill='white'
      />
    </Svg>
  );
};

export default Bell;
