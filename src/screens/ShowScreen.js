import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context } from '../context/BlogContext';

export default function ShowScreen({ route, navigation }) {
    const { state } = useContext(Context)
    const { id } = route.params;
    const { title } = route.params;

 return (
   <View>
    <Text> {title}</Text>
   </View>
  );
}