import React from 'react';
import { View } from 'react-native';
import Grid from '../svgs/f/Grid';
import Reel from '../svgs/f/Reel';
import Tagged from '../svgs/f/Tagged';
import styles from '../../styles/styles';

interface Props {
  activeComponent: number;
};

const PostsNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxf} {...props}>

      {/* All components contained in PostsNav can be
      found in components/svgs/f */}
      {props.activeComponent == 1 ? <Grid switch={1} /> : <Grid switch={0} />}
      {props.activeComponent == 2 ? <Reel switch={1} /> : <Reel switch={0} />}
      {props.activeComponent == 3 ? <Tagged switch={1} /> : <Tagged switch={0} />}

      {/* All child components */}
      {children}
    </View>
  );
};

export default PostsNav;
