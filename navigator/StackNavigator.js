import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBarNavigator from './TabBarNavigator'
import Home from '../screen/Home'
import Todo from '../screen/Todo'
import ProgramInfo from '../screen/ProgramInfo'
import Login from '../screen/Login'
import OpenAI from '../components/OpenAI'
import Clock from '../screen/Clock'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  return (

    <Stack.Navigator
      screenOptions = {{
        headerShown : false
      }}>
    
      <Stack.Screen name = "Login" component = {Login} />
      
      <Stack.Screen name = "Tab" component={TabBarNavigator} />
      <Stack.Screen name = "Home" component = {Home}/>
      <Stack.Screen name = "Todo" component = {Todo}/>
      <Stack.Screen name = "Clock" component = {Clock} />
      <Stack.Screen name = "ChatGPT" component = {OpenAI}/>
      <Stack.Screen name = "Program Info" component = {ProgramInfo} />

    </Stack.Navigator>

  );
  
}

export default StackNavigator