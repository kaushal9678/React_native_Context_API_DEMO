import React, { Component,useContext } from 'react';
import {
  View,

} from 'react-native';
import BlogForm from '../components/BlogForm';
import {Context} from '../context/BlogContext';

const CreateScreen=({navigation})=>{
  const {addBlogPost} =  useContext(Context);

  return <BlogForm onSubmit={(title,content)=>{
    addBlogPost(title,content,()=>navigation.navigate('Index'));
  }}/>
}


export default CreateScreen;
