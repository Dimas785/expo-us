import { Image, View, } from 'react-native';
import React from 'react';
import { Card, Text } from '@ui-kitten/components';

const CardCustom = ({nama, deskripsi, image, onPress}) => {
  const string = 'Presiden Republik Indonesia, umumnya . . . ';
  return (
    <Card onPress={onPress} style={{ width: '48%', borderRadius: 10 }}>
      <Image
        source={image}
      />
      <Text style={{ fontSize: 16 }} category='label'>{nama}</Text>
      <Text category='c2'>
        {string.length > 70 ? string.substring(0, 65).concat('...') : string}
      </Text>
    </Card>
  );
};

export default CardCustom;