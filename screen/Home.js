import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Home = (props) => {

  return (

    <View style = {{
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center', 
      backgroundColor : 'white'
    }}>

      <TouchableOpacity 
        style = {style.buttonStyle}
        onPress = {() => {props.navigation.navigate("Todo")}}>
        <Text style = {style.textStyle}> Todo </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {style.buttonStyle}
        onPress = {() => {props.navigation.navigate("Clock")}}>
        <Text style = {style.textStyle}> Clock </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style = {style.buttonStyle}
        onPress = {() =>{props.navigation.navigate("ChatGPT")}}>
        <Text style = {style.textStyle}> ChatGPT </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {style.buttonStyle}
        onPress = {() => {props.navigation.navigate("Program Info")}}>
        <Text style = {style.textStyle}> ProgramInfo </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {style.buttonStyle}
        onPress = {() => {props.navigation.navigate("Login")}}>
        <Text style = {style.textStyle}> Logout </Text>
      </TouchableOpacity>

    </View>

  );

}

const style = StyleSheet.create({

  buttonStyle : {
    alignItems : "center",
    justifyContent : 'center', 
    width : '80%',
    height : '15%', 
    margin : 10, 
    backgroundColor : '#BFE4FF',
    borderColor : '#40AFFF',
    borderWidth : 10, 
    borderRadius : 15
  },

  textStyle : {
    fontSize : 30,
    fontWeight : 'bold',
    alignItems : 'center',
  }

});


export default Home