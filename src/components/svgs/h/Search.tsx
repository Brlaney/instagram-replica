import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const Search: React.FC<{}> = ({ ...props }) => {
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
      <Circle
        cx='116.405'
        cy='69.4048'
        r='26.4048'
        stroke='white'
        strokeWidth='6'
      />
      <Path
        d='M152 105L135.492 88.4921'
        stroke='white'
        strokeWidth='5'
        strokeLinecap='round'
      />
    </Svg>
  );
};

export default Search;
