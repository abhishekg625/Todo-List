
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItems from './components/TodoItem';
import AddTodo from './components/addTodo';
 import Sandbox from './components/sandbox';
//import Alert from "react-native-awesome-alerts";
//import { Button } from 'react-native-web';


export default function App() {

  const [todos , setTodos]=  useState( [
    {text: 'buy a cofee', key:1},
    {text: 'create an app', key:2},
    {text: 'playing games', key:3},
  ]);

  // const pressHandler =(key)=> {
  //   console.log(key);
  //   setTodos((prevTodos)=> {
  //     return prevTodos.filter(todo= todo.key!= key);
      
  const pressHandler= (key)=>{
  console.log(key);
  setTodos((prevTodos)=>{
    return prevTodos.filter(todo => todo.key!=key); 
    
  
  });

  }
  const submitHandler = (text)=>{
    if (text.length> 3) 
    {
      setTodos((prevTodos)=> {

        return[
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
  
      });
      
    }else{
      alert("oops",'please enter valid task ' [
        {text:'undustand', onPress:() => console.log('alert closed')}
      
      
      ]);
    }   
  }


  return (
  //<Sandbox/>
    


    <TouchableWithoutFeedback   onPress ={ ()=> console.log("keyboard dismised")}>
    <View style={styles.container}>

      <Header/>
      <View style ={styles.content}>

        <AddTodo submitHandler={submitHandler}/>
         <View style= {styles.list}>
           <FlatList
           data= {todos}
           renderItem={({item})=>(
             //<Text>{item.text}</Text>
             <TodoItems item= {item } pressHandler={pressHandler}/>
           )
           }
           />
          
         </View>
      </View>   
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:{
    padding: 20,
    backgroundColor: 'pink',
    flex:1

  },

  list: {
    marginTop: 20,
    marginLeft:10,
    flex:1,
    backgroundColor:'#fff'
    
  }
});
