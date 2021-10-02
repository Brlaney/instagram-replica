import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface Props {
  // Add more prop types here
};

const UserBadge: React.FC<Props> = ({ ...props }) => {
  return (
    <Svg
      width='234'
      height='159'
      viewBox='0 0 234 159'
      fill='none'
      {...props}
    >
      <Path
        d='M0 0H234V158.5H0V0Z'
        fill='black'
      />
      <Circle
        cx='117'
        cy='75'
        r='36'
        stroke='#464646'
        strokeWidth='2'
      />
    </Svg>
  );
};

export default UserBadge;
