import React,{useContext} from 'react';
import {withNavigator} from 'react-navigation'
import {
  View,
  StyleSheet,Text,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import {Context}from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const IndexScreen =({navigation}) =>{
const {state,addBlogPost,deleteBlogPost} = useContext(Context);
  return <View>

    <FlatList data={state}
      keyExtractor={blogPost => blogPost.id.toString()}
      renderItem = {({item}) => {
          return <TouchableOpacity
                      onPress={()=>navigation.navigate('Show',{id:item.id})}>

                        <View style={styles.row}>

                          <Text style={styles.title}>{item.title} {item.content} - {item.id}</Text>

                          <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>

                              <Feather style={styles.icon} name="trash" size={30}/>

                          </TouchableOpacity>

                        </View>
                  </TouchableOpacity>
                }}
              />
          </View>
}

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: <TouchableOpacity onPress={()=>navigation.navigate('Create')}><Feather name="plus" style={styles.icon} /></TouchableOpacity>

  }
}

const styles = StyleSheet.create({
  row:{
    //flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    //borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  title:{
    fontSize: 18,

  },
  icon:{
    fontSize: 24
  }
});
export default IndexScreen;
