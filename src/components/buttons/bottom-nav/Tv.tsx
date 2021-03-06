import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const Tv: React.FC<{}> = ({ ...props }) => {
  return (
    <Svg
      width='234'
      height='155'
      viewBox='0 0 234 155'
      fill='none'
      {...props}>
      <Path
        d='M0 0H234V158.5H0V0Z'
        fill='black'
      />
      <Path
        d='M88 58H146'
        stroke='white'
        strokeWidth='6'
        strokeLinecap='round'
      />
      <Path
        d='M127.132 77.4509C128.949 78.6479 128.927 81.3191 127.092 82.4868L113.611 91.066C111.613 92.3369 109 90.9023 109 88.535V71.0703C109 68.6813 111.656 67.2507 113.651 68.5654L127.132 77.4509Z'
        fill='white'
      />
      <Rect
        x='87'
        y='43'
        width='60'
        height='60'
        rx='17'
        stroke='white'
        strokeWidth='6'
      />
      <Path
        d='M129 57L122 44'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
      <Path
        d='M110 57L103 44'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
    </Svg>
  )
};

export default Tv;
