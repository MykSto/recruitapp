import React from 'react';
import { Text } from 'react-native';

export  function NunitoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'nunito' }]} />
  );
}