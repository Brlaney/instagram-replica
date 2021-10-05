import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const Profile: React.FC<{}> = ({ ...props }) => {
  return (
    <Svg
      width='234'
      height='155'
      viewBox='0 0 234 155'
      fill='none'
      {...props}
    >
      <Circle
        cx='117'
        cy='78'
        r='35'
        fill='white'
      />
      <Circle
        cx='117'
        cy='71'
        r='13'
        fill='black'
      />
      <Path
        d='M117 104C107 104 103.5 101 97.5 94.5'
        stroke='black'
        strokeLinecap='round'
      />
      <Path
        d='M97.5 94.5C103 89.5 102.829 89.1092 108 89H117'
        stroke='black'
        strokeLinecap='round'
      />
      <Path
        d='M117 104C127 104 130.5 101 136.5 94.5'
        stroke='black'
        strokeLinecap='round'
      />
      <Path
        d='M136.5 94.5C131 89.5 131.171 89.1092 126 89H117'
        stroke='black'
        strokeLinecap='round'
      />
      <Path
        d='M136.5 94.5C133.5 97 128.27 104 117.5 104C106.73 104 104 101 98 94.5C103.5 88 106.5 89.5 117 89.5C129.5 89 131 89 136.5 94.5Z'
        fill='black'
      />
    </Svg>
  );
};

export default Profile;
