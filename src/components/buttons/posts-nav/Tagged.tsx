import * as React from 'react';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import { View } from 'react-native';
import styles from '../../../styles/styles';


interface Props {
  // Add more prop types here
  switch: number;
};

const colors = [
  '#ffffff',
  '#C4C4C4'
];

const Tagged: React.FC<Props> = ({ ...props }) => {
  return (
    <View style={styles.postsNavRight} {...props}>
      <Svg
        width='388'
        height='125'
        viewBox='0 0 388 125'
        fill='none'
        {...props}
      >
        <Path
          d='M169.877 37.9983H185.924M163 85.6812V45.7926'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Path
          d='M170.336 93.0171H217.102'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Path
          d='M224.438 84.7643V45.3341'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Path
          d='M201.513 37.9983H217.102'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Path
          d='M163 45.7926C163 41.2077 165.292 37.9983 169.877 37.9983'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Path
          d='M163 85.2228C163 89.8077 165.292 93.0171 169.877 93.0171'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Path
          d='M224.438 85.2228C224.438 89.8077 222.145 93.0171 217.56 93.0171'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Path
          d='M224.438 44.8756C224.438 40.2907 222.145 37.9983 217.56 37.9983'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Path
          d='M185.924 37.9984L189.822 34.3305C192.697 31.3527 194.388 31.0963 197.616 34.3305L201.513 37.9984'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Path
          d='M174.438 90.4996C174.438 81.9996 179.938 78.4996 184.938 78.4996H193.438'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Path
          d='M213.188 90.4996C213.188 81.9996 207.688 78.4996 202.688 78.4996H193.438'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
          strokeLinecap='round'
        />
        <Circle
          cx='193.438'
          cy='59'
          r='11'
          stroke={props.switch == 1 ? colors[0] : colors[1]}
          strokeWidth='5'
        />
        <Rect
          y='119'
          width='388'
          height='3'
          fill={props.switch == 1 ? colors[0] : 'none'}
        />
      </Svg>
    </View>
  );
};

export default Tagged;
