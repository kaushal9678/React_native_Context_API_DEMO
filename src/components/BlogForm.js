import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button
  Text,TextInput
} from 'react-native';

const BlogForm=(props)=>{
  const [title,setTitle] = useState('');

  const [content,setContent] = useState('');
return(
  <View>
      <Text style={styles.label}>Enter Title: }</Text>
          <TextInput style={styles.input} value={props.title} onChangeText={(text)=>setTitle(text)}/>
          <Text style={styles.label} > Enter Content:</Text>
          <TextInput style={styles.input} value={props.content} onChangeText={(text)=>setContent(text)}/>
          <Button title="Save" onPress={()=>{editBlogPost(navigation.getParam('id'),
          title,
          content,
          ()=>{  navigation.navigate('Index');
          });
          }
         }
      />
  </View>
)
}
const styles=StyleSheet.create({
  input:{
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    marginHorizontal: 10,
    padding:5,
  },
  label:{
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 10,
  }
});
export  default BlogForm;
