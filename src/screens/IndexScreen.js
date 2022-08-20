import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

export default function IndexScreen({ navigation }) {
  const { state, deleteBlogPost } = useContext(Context);

 return (
   <View>
    <FlatList
      data={state}
      keyExtractor={(blogPost) => blogPost.title}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('ShowScreen', item, item.id, item.title )}>
          <View>
            <View style={styles.row}>
              <Text style={styles.title}> {item.title} </Text>

              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          </TouchableOpacity>
        )
      }}
    />
   </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
})