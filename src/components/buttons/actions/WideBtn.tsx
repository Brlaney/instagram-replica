import React from 'react';
import { Button } from 'react-native';

interface Props {
  titleText: string;
};

const WideBtn: React.FC<Props> = ({ ...props }) => {

  function handleNothing() {
    return null;
  };

  return (
    <Button
      title={props.titleText}
      color='transparent'
      accessibilityLabel='A re-usable wide button component made with react native'
      onPress={() => { handleNothing }}
      {...props}
    />
  );
};

export default WideBtn;
