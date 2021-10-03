import * as React from 'react';
import { View } from 'react-native';
import Svg, {
  Circle,
  Defs,
  RadialGradient,
  Stop
} from 'react-native-svg';
import styles from '../../../styles/styles';

interface Props {
  // Add more prop types here
};

/* 
stroke={props.iconState.active ? 'white' : '#C4C4C4'} 
*/

const ProfileImageHolder: React.FC<Props> = ({ ...props }) => {
  return (
    <View style={styles.statsNavLeftEnd} {...props}>
      <Svg
        width='356'
        height='309'
        viewBox='0 0 356 309'
        fill='none'
      >
        <Circle
          cx='178'
          cy='155'
          r='140'
          stroke='url(#paint0_radial)'
          strokeWidth='10'
        />
        <Circle
          cx='178'
          cy='156'
          r='129'
          fill='#474747'
          fillOpacity='0.65'
        />
        <Defs>
          <RadialGradient
            id='paint0_radial'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(21.0001 308.5) rotate(-51.2968) scale(618.917 1476.72)'
          >
            <Stop stopColor='#FDF497' />
            <Stop offset='0.0989583' stopColor='#FDF497' />
            <Stop offset='0.215835' stopColor='#FD9E6C' />
            <Stop offset='0.364583' stopColor='#FD5949' />
            <Stop offset='0.640625' stopColor='#D6249F' />
            <Stop offset='0.947917' stopColor='#285AEB' />
          </RadialGradient>
        </Defs>
      </Svg>
    </View >
  );
};

export default ProfileImageHolder;
