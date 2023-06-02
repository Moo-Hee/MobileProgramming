import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screen/Home'
import Todo from '../screen/Todo'
import ProgramInfo from '../screen/ProgramInfo'
import TabIcon from '../components/TabIcon'
import OpenAI from '../components/OpenAI'
import Clock from '../screen/Clock'
import Header from '../components/Header'

const Tab = createBottomTabNavigator();

const TabBarNavigator = () => {

  return (

    <Tab.Navigator initialRouteName="Home"
      screenOptions = {({route}) => ({
          tabBarLabel : route.name,
          tabBarIcon : ({focused}) => (
            TabIcon(focused, route.name)
          ),
        })}
    >

      <Tab.Screen name = "Home" component = {Home}
        options = {{
          title : "Home", 
          headerLeft : () => (
            <Header icon = "Home"/>
            )
        }}
      />
      <Tab.Screen name = "Todo" component = {Todo} 
      options = {{
          title : "Todo", 
          headerLeft : () => (
            <Header icon = "Todo"/>
            )
        }}
      />
      <Tab.Screen name = "Clock" component = {Clock} 
      options = {{
          title : "Clock", 
          headerLeft : () => (
            <Header icon = "Clock"/>
            )
        }}
      />
      <Tab.Screen name = "ChatGPT" component = {OpenAI} 
      options = {{
          title : "ChatGPT", 
          headerLeft : () => (
            <Header icon = "ChatGPT"/>
            )
        }}
      />
      <Tab.Screen name = "Program Info" component = {ProgramInfo} 
      options = {{
          title : "Program Info", 
          headerLeft : () => (
            <Header icon = "Program Info"/>
            )
        }}
      />

    </Tab.Navigator>

  );

}

export default TabBarNavigator