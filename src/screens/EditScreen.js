import React, { Component,useContext } from 'react';
import {
  View,

} from 'react-native';

import {Context} from '../context/BlogContext';
import BlogForm from '../components/BlogForm';


const EditScreen=({navigation})=>{

  const {state,editBlogPost} =  useContext(Context);

  const id = navigation.getParam('id');
  const blogPost = state.find((blogPost)=> blogPost.id === id);


  return   <BlogForm initialValues={{title:blogPost.title,content:blogPost.content}}
  onSubmit={(title,content)=>{
      editBlogPost(id,title,content,()=>{navigation.pop()})
  }}
    />


}


export default EditScreen;
