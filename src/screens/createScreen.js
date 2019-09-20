import React, { Component,useState,useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button
} from 'react-native';

import {Context} from '../context/BlogContext';

const CreateScreen=({navigation})=>{
  const {addBlogPost} =  useContext(Context);


}

const styles= StyleSheet.create({

});
export default CreateScreen;
