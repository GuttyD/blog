import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

export default function CreateScreen({ navigation  }) {
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    const {addBlogPost} = useContext(Context);

 return (
   <View style={styles.container}>
    <Text style={styles.label}> Enter title: </Text>
    <TextInput style={styles.input}  value={title} onChangeText={(text) => setTitle(text)}/>

    <Text style={styles.label}> Enter content: </Text>
    <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>

    <TouchableOpacity onPress={() => { 
        addBlogPost(title, content, () => {
            navigation.goBack();
        });
        }}>
        <Text> Add blog post </Text>
    </TouchableOpacity>
   </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        borderRadius: 10,
        width: '95%',
        height: 50,
        textAlign: 'center',
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    },
})