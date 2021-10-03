import React from 'react';
import { View } from 'react-native';
import Grid from '../buttons/posts-nav/Grid';
import Reel from '../buttons/posts-nav/Reel';
import Tagged from '../buttons/posts-nav/Tagged';
import styles from '../../styles/styles';

interface Props {
  activeComponent: number;
};

const PostsNav: React.FC<Props> = ({ children, ...props }) => {
  return (
    <View style={styles.boxf} {...props}>

      {/* All components contained in PostsNav can be
      found in components/buttons/posts-nav */}
      {props.activeComponent == 0 ? <Grid switch={1} /> : <Grid switch={0} />}
      {props.activeComponent == 1 ? <Reel switch={1} /> : <Reel switch={0} />}
      {props.activeComponent == 2 ? <Tagged switch={1} /> : <Tagged switch={0} />}

      {/* All child components */}
      {children}
    </View>
  );
};

export default PostsNav;
