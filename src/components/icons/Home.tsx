import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  // Add more prop types here
};

const Home: React.FC<Props> = ({ ...props }) => {
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
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M106 105.5H86C84.1677 105.5 84 105 84 103.5L84 71.1795C84 69.5 84.5 69 86.3323 67.1565L109 46.0002C117 37.5 117 37.5 125 46L147.668 67.1565C150 69.5 150 69 150 71L149.982 103.5C149.982 105.5 149.982 105.5 147.668 105.5H128C126 105.5 126 105.5 126 103.5V85.5C126 81.5 123 76.5 117 76.5C111 76.5 108 81.5 108 85.5V86.5V103.5C108 105.5 108 105.5 106 105.5Z'
        fill='#FAFAFA'
      />
    </Svg>
  );
};

export default Home;
