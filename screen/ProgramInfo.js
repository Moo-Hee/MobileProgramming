import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

const ProgramInfo = () => {

  return (

    <View
      style = {{
        alignItems : 'center', 
        justifyContent : 'center', 
        flex : 1, 
        backgroundColor : 'black'
      }}
      >


      <View
        style = {{
        alignItems : 'center', 
        justifyContent : 'center', 
        flex : 1
      }}>

       <Text style = {style.textStyle}>

          MobileProgramming {"\n"}
          TodoList {"\n"}
          Project {"\n"}
          2019243058 {"\n"}
          KimWooHee {"\n"}

        </Text>

      </View>

      

      <TouchableOpacity
        onPress = {() => Linking.openURL("https://youtu.be/RvRjs3gCajM")}>
        <Text
          style = {{
            alignItems : 'center',
            justifyContent : 'flex-end',
            fontSize : 30,
            color : 'yellow',
            backgroundColor : 'black', 
            borderWidth : 5, 
            borderColor : 'yellow', 
            borderRadius : 10
          }}> 
        MY FAVORITE SONG </Text>
      </TouchableOpacity>

    </View>

  );

}

const style = StyleSheet.create({

  textStyle : {
    alignItems : "center",
    justifyContent : 'center', 
    fontSize : 20,
    fontWeight : 'bold', 
    color : "white", 
    marginBottom : 10, 
  },

});

export default ProgramInfo