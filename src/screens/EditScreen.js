import React, { Component,useState,useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button
} from 'react-native';

import {Context} from '../context/BlogContext';
import BlogForm from '../components/BlogForm';
const EditScreen=({navigation})=>{
  const {editBlogPost,state} =  useContext(Context);


  const blogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'));
  const [title,setTitle] = useState(blogPost.title);

  const [content,setContent] = useState(blogPost.content);

  return <View>
        <BlogForm onPress={editBlogPost} title={title} content={content}/>

        />
        </View>
}

const styles= StyleSheet.create({
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
export default EditScreen;
