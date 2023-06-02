import {Image} from 'react-native'

const TabIcon = (focused, name) => {

let iconImagePath;
  
  if(name === "Home") {
    iconImagePath = require('../assets/Home.png')
  }
  else if (name === "Todo") {
    iconImagePath = require('../assets/Todo.png')
  }
  else if (name === "Clock") {
    iconImagePath = require('../assets/Clock.png')
  }
  else if (name === "ChatGPT"){
    iconImagePath = require('../assets/GPT.png')
  }
  else if (name === 'Program Info') {
    iconImagePath = require('../assets/Program.png')
  }

  return (

    <Image style = {{
      width : focused ? 24:20,
      height : focused ? 24:20,
      }}
      source = {iconImagePath}
    />
  )

}

export default TabIcon