import {
  Image
} from 'react-native'


const Header = (props) => {
  if (props.icon == 'Home') {
    return (
      <Image
        style = {{width: 40, height: 40}}
        source = {require('../assets/Home.png')}
      />
    )
  } else if (props.icon == 'Todo') {
    return (
      <Image
        style = {{width: 40, height: 40}}
        source = {require('../assets/Todo.png')}
      />
    )
  } else if (props.icon == 'ChatGPT') {
    return (
      <Image
        style = {{width: 40, height: 40}}
        source = {require('../assets/GPT.png')}
      />
    )
  } else if (props.icon == 'Clock') {
    return (
      <Image
        style = {{width: 40, height: 40}}
        source = {require('../assets/Clock.png')}
      />
    )
  } else if (props.icon == 'Program Info') {
    return (
      <Image
        style = {{width: 40, height: 40}}
        source = {require('../assets/Program.png')}
      />
    )
  }
}

export default Header