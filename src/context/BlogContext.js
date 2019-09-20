import React from 'react';
import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer';


const blogReducer =(state,action)=>{
  switch (action.type) {

    case "get_blogposts":
      return action.payload;
    case "add_blogpost":
        return  [...state,{id:Math.floor(Math.random() * 99999) ,title:action.payload.title,content:action.payload.content}];
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
return  async (title,content,callBack)  =>  {
  const response = await jsonServer.post('/blogposts',{title,content});
  console.log("response===",response);
  //dispatch({type:"add_blogpost",payload:response});
  if(callBack){
    callBack();
  }


/*   dispatch ({type:"add_blogpost",payload:{title:title,content:content}});
  if(callBack){
    callBack();
  }*/
 };
}
const deleteBlogPost=(dispatch)=>{
return  async (id)  =>  {
  await jsonServer.delete(`/blogposts/${id}`);
   dispatch ({type:"delete_blogpost",payload:id})
 };
}
const editBlogPost=(dispatch)=>{
return  async(id,title,content,callBack)  =>  {
  await jsonServer.put(`/blogposts/${id}`,{title,content})
   dispatch ({type:"edit_blogpost",payload:{id,title,content}});
   if(callBack){
     callBack()
 }
 };
}


export const {Context, Provider} = createDataContext(blogReducer,{addBlogPost,deleteBlogPost,editBlogPost,getBlogPost,},[]);
