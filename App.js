import React, {Component, useState} from 'react';
import {StyleSheet, Text,View, TextInput,  Button , Alert, TouchableOpacity, RadioButton, Platform,} from 'react-native';

type Props = {};

export default class App extends Component<Props> {

constructor(props){
    super(props)
    this.state={altura:0, peso:0, nome: "", result:0,resultTexto:""}
    this.calcular=this.calcular.bind(this)
  
    
}
    calcular(){
        let imc = this.state.peso/(this.state.altura*this.state.altura)
        let s=this.state
        s.result = imc 
        this.setState(s)


    }
    

    render (){
        return (
            <View style={styles.container}>
            <View style={styles.box}>
           <Text style={styles.title}>Calculadora IMC</Text>
             </View>
             
              
              <View style={styles.principal}>
             
              <TextInput style={styles.form} placeholder='Nome' textContentType='name' />
              <TextInput style={styles.form} placeholder='Peso' keyboardType = 'numeric'onChangeText={(peso)=>{this.setState({peso})}}/>
              <TextInput style={styles.form} placeholder='Altura' keyboardType = 'numeric'onChangeText={(altura)=>{this.setState({altura})}} />
              <TouchableOpacity style={styles.bt} onPress={this.calcular}><Text>Calcular IMC</Text></TouchableOpacity>
              
              <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
              <Text style={styles.result2}></Text>
          </View>
         
          </View>
            
                
        );
        
        
    }
}
 const styles = StyleSheet.create ({
container:{
flex:1,
alignItems: 'center', 
justifyContent: 'center' ,
backgroundColor: '#06111C',


},

box:{
    flexDirection: 'row' ,
    width : '80 %' ,
    marginBottom: 30 ,
  
  },
  

 title :{
     fontSize: 25,
     color:'#DB592A' ,
     fontWeight: '600',
     paddingTop: 20,
    
 },
 
 principal :{
    width :600,
    height: 600,
    backgroundColor: '#BEC7C7',
    alignItems: 'center',
    justifyContent: 'center' ,
    padding: 30,
    marginBottom: 150,

},

form:{
    height: 40,
    width: 320,
    padding: 10,
    fontSize: 15,
    color: '#333',
    backgroundColor: 'rgba(250,250,250,0)',
    borderColor: '#fff',
    borderBottomWidth: 2,
    marginTop:30,
 
 
   
},

bt:{
    width: 320,
    padding: 20,
    fontSize: 25,
    color: 'red',
    backgroundColor: 'rgb(250, 250, 250)',
    justifyContent: 'center',
    alignItems:'center',
    marginTop:35,

},
result:{
    fontSize: 35,
    fontWeight: 'bold',
    marginTop:20,
    color: '#2C3AA7',
    backgroundColor: 'rgba(250,250,250,0)',
    borderColor: '#fff',
    borderBottomWidth: 1,
    marginTop:30,
 
},
result2:{
    fontSize: 35,
    fontWeight: 'bold',
    marginTop:20,
    color: '#2C3AA7',
    backgroundColor: 'rgba(250,250,250,0)',
    borderColor: '#fff',
    borderBottomWidth: 1,
    marginTop:30,

},


 });
      