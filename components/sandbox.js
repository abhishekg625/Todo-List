import React,{useState} from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Sandbox(){
    return(

       <View style = {styles.container}>

           <Text style ={styles.boxOne}>one</Text>
           <Text style ={styles.boxTwo}>two</Text>
           <Text style ={styles.boxThree}>three</Text>
           <Text style ={styles.boxFour}>four</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        //flex:1,
        padding:40,
        backgroundColor: '#ddd',
    },
    boxOne:
    {
        backgroundColor: 'pink',
        pading : 10,
        
    },
    boxTwo:
    {
        backgroundColor: 'gold',
        pading : 10,
        
    },
    boxThree:
    {
        backgroundColor: 'coral',
        pading : 10,
        
    },
    boxFour:
    {
        backgroundColor: 'skyblue',
        pading : 10,
        
    }

});
