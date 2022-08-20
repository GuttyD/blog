import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PlusButton() {
    const navigation = useNavigation();
 return (
    <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')} >
    <Feather name="plus" size={24} color="black" />
  </TouchableOpacity>
  );
}