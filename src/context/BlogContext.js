import React from 'react';
import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer';


const blogReducer =(state,action)=>{
  switch (action.type) {

    case "get_blogposts":
      return action.payload;
    case "add_blogpost":
        return [...state,{id:Math.floor(Math.random() * 99999) ,title:action.payload.title,content:action.payload.content}];
      break;
    case "delete_blogpost":
        return state.filter((blogPost)=> blogPost.id != action.payload);
    case "edit_blogpost":

        return state.map((blogPost)=>{
          return blogPost.id === action.payload.id ?  action.payload : blogPost;

      })

    default:

  }
}

const getBlogPost=(dispatch) =>{
  return async()=>{
      const response =  await jsonServer.get('/blogposts');
        //response.data == [{},{}];
      dispatch({type:'get_blogposts',payload:response.data});
  };
}

const addBlogPost=(dispatch)=>{
return  (title,content,callBack)  =>  {
   dispatch ({type:"add_blogpost",payload:{title:title,content:content}});
  if(callBack){
    callBack();
  }
 };
}
const deleteBlogPost=(dispatch)=>{
return  (id)  =>  {
   dispatch ({type:"delete_blogpost",payload:id})
 };
}
const editBlogPost=(dispatch)=>{
return  (id,title,content,callBack)  =>  {
   dispatch ({type:"edit_blogpost",payload:{id,title,content}});
   if(callBack){
     callBack()
 }
 };
}


export const {Context, Provider} = createDataContext(blogReducer,{addBlogPost,deleteBlogPost,editBlogPost,getBlogPost,},[]);
