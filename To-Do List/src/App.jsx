import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import TodoName from './Component/TodoName'
import AddTodo from './Component/AddTodo'
import { useState } from "react";
import TodoItem from "./Component/TodoItem";

function App() {
  let itemList1 = []
 
  const [TodoItems,setTodoItems]= useState(itemList1);

  // function handleInputBtn(text,date1){
  //   let newItemList = [...TodoItems,{taskName:text,date:date1}];
  //   setTodoItems(newItemList);
  // }
  const handleInputBtn = (name,date2) =>{
    
    setTodoItems((currentValue)=>[...currentValue,{taskName:name,date:date2}]);

  }
  function handledeleteBtn(MyIndex){
    let newItemwithFillter = TodoItems.filter((item,index)=>{
      if(index !== MyIndex){
        return item;
      }
    })
    setTodoItems(newItemwithFillter);
  }
  return (
    <>
    <div className="div">
      <TodoName/>
    <AddTodo newitems={handleInputBtn}/>
    <TodoItem itemList1={TodoItems} handledeleteBtn1={handledeleteBtn}/>
    </div>
     </>
  )
}

export default App
