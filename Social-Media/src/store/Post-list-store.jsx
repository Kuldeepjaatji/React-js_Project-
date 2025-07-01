import { createContext, useReducer } from "react";


export const PostList = createContext({
    PostList:[],
    addPost: () =>{},
    deletePost:() => {},
});

const postListReducer = (currPostList, Action) => {
    return currPostList;
}

export const PostListProvider = ({ children }) =>{

    const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);

    const addPost=() =>{};

    const deletePost=() => {};

    return(
    <PostList.Provider value={{postList,addPost,deletePost}}>{children}</PostList.Provider>
);  
};
export const DEFAULT_POST_LIST = [
        {
        id:'1',
        title:'Going to Mumbai',
        body:'Hi Friends, I am going to Mumbai for my vacations.Hope to enjoy a lot. Peace out.',
        reaction:2,
        userId:'Kuldeep_Jaat_Ji',
        tags:['vacations','Mumbai','enjoy']
    },
    {
        id:'2',
        title:'Going to Jaipur',
        body:'Hi Friends, I am going to jaipur for my vacations.Hope to Enjoy a lot. Peace out.',
        reaction:12,
        userId:'Jaat_Ji',
        tags:['vacations','Jaipur','Enjoying']
    }];
