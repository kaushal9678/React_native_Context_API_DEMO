import React,{useContext} from 'react';
import {View,Text, StyleSheet,TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
const ShowScreen =({navigation})=>{
  const {state} = useContext(Context);
//  const item = navigation.getParam('item');
//  console.log("item==",item);
  const blogPost = state.find((blogPost)=> blogPost.id == navigation.getParam(
    'id'));
  return (
            <View style={styles.containerBox}>
            <Text style={styles.titleDetails}>Blog Details</Text>

            <Text>{blogPost.title}</Text>
               <Text>{blogPost.content}</Text>
            </View>
        )
}

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:navigation.getParam('id')})}><Feather name="edit" style={styles.icon} /></TouchableOpacity>

  }
}

const styles = StyleSheet.create({
  icon:{
    fontSize: 24
  },
  containerBox:{
    borderWidth: 1,
    borderColor: "#e2e2e2",
    borderRadius: 4,
    margin: 10,
  },
  titleDetails:{
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  }
});
export default ShowScreen;
