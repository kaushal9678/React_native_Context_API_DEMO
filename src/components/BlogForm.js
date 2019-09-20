import React, { Component,useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,TextInput
} from 'react-native';

const BlogForm=({onSubmit,initialValues})=>{
  const [title,setTitle] = useState(initialValues.title);

  const [content,setContent] = useState(initialValues.content);

return(
  <View>
      <Text style={styles.label}>Enter Title: }</Text>
          <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
          <Text style={styles.label} > Enter Content:</Text>
          <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)}/>
          <Button title="Save Blog post" onPress={()=>onSubmit(title,content)}


      />
  </View>
)
}


BlogForm.defaultProps = {
  // that default props is used to assign initial
  //value to a prop if prop is not passed from a parent Component.
  //Like initialValues here not passed by createScreen and passed from editScreen;
  initialValues:{title:"",content:""}
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
