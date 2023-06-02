import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {useState} from 'react'

const Login = (props) => {

  const [idText, setIdText] = useState('')
  const [password, setPassword] = useState('')

  return (

    <View style = {{
      flex : 1,
      alignItems : 'center', 
      justifyContent : 'center', 
      backgroundColor : 'white'
    }}>

      <Text style = {style.textStyle}> LOGIN </Text>

      <TextInput
        style = {style.textInputStyle}
        placeholder = 'ID'
        value = {idText}
        onChangeText = {(value) => setIdText(value)}
      />

      <TextInput
        style = {style.textInputStyle}
        placeholder = 'PASSWORD'
        value = {password}
        onChangeText = {(value) => setPassword(value)}
        secureTextEntry = {true}
      />

      <TouchableOpacity 
        style = {{
          borderWidth : 2,
          borderColor : 'blue',
          backgroundColor : 'skyblue', 
          borderRadius : 15
          
        }}
        onPress = {() => props.navigation.navigate("Tab")}>
        <Text> Login </Text>
      </TouchableOpacity>

    </View>

  );

}

const style = StyleSheet.create({

  textStyle : {
    alignSelf : "Center",
    fontSize : 30,
    color : "black", 
    marginBottom : 10
  },

  textInputStyle : {
    borderWidth : 5, 
    borderColor : 'skyblue', 
    marginBottom : 10, 
    width : '80%', 
    borderRadius : 10
  }

});

export default Login