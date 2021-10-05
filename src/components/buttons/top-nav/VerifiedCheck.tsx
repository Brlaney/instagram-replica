import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const Verified: React.FC<{}> = ({ ...props }) => {
  return (
    <Svg
      width='58'
      height='105'
      viewBox='0 0 58 105'
      fill='none'
      {...props}
    >
      <Rect
        x='15.7584'
        y='39.7583'
        width='26'
        height='26'
        fill='#3797F0'
      />
      <Rect
        x='24.0001'
        y='35'
        width='26'
        height='26'
        transform='rotate(30 24.0001 35)'
        fill='#3797F0'
      />
      <Rect
        x='11'
        y='48'
        width='26'
        height='26'
        transform='rotate(-30 11 48)'
        fill='#3797F0'
      />
      <Path
        d='M35.7584 49.7583L27.2584 57.7583'
        stroke='black'
        strokeWidth='4'
        strokeLinecap='round'
      />
      <Path
        d='M22.7584 53.7583L27.2584 57.7583'
        stroke='black'
        strokeWidth='4'
        strokeLinecap='round'
      />
    </Svg>
  );
};

export default Verified;
