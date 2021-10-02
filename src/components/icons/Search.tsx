import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface Props {
  // Add more prop types here
};

const Search: React.FC<Props> = ({ ...props }) => {
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
        cx='116.405'
        cy='69.4048'
        r='26.4048'
        stroke='#FAFAFA'
        strokeWidth='6'
      />
      <Path
        d='M152 105L135.492 88.4921'
        stroke='#FAFAFA'
        strokeWidth='5'
        strokeLinecap='round'
      />
    </Svg>
  );
};

export default Search;
