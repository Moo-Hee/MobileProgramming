import {
  View,
  Text, 
  TouchableOpacity, 
  TextInput,
} from 'react-native'
import {useState} from 'react'


const OpenAI = () => {
  const [text, setText] = useState('')
  const [response, setResponse] = useState('') 
  const generateText = async () => {
    const prompt = text;
    const apiKey = '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'
    const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions'

    const headers = {
      'Content-Type' : 'application/json',
      Authorization: `Bearer ${apiKey}`
    }

    const data = {
      prompt : prompt,
      max_tokens: 1024,
      temperature: 0.7,
    }

    const response = await fetch(url, {
      method:'POST',
      headers:headers,
      body:JSON.stringify(data)
    })
    const result = await response.json()
    setResponse(result.choices[0].text)
  }

  

  return (
    <View style = {{
      backgroundColor : 'white', 
      alignItems : 'center', 
      flex : 1
    }}>
      <Text style = {{
        fontSize : 20, 
        fontWeight : 'bold',
      }}>궁금한건 GPT에게 물어보세요!</Text>
      <TextInput
        style = {{marginTop: 10, borderWidth: 3, borderRadius : 10, borderColor : 'skyblue'}}
        placeholder = '질문을 입력하세요'
        value = {text}
        onChangeText = {(value) => setText(value)}
      />
      <TouchableOpacity 
        style = {{
          alignItems : 'center', 
          justifyContent : 'center', 
          margin : 10,
          borderWidth : 3, 
          borderColor : '#FF8080', 
          borderRadius : 8, 
          backgroundColor : '#FF9999'
        }}
        onPress = {generateText}>
        <Text style = {{
          color : 'white'
        }}>GPT에게 물어보기</Text>
        
      </TouchableOpacity>
      <Text style = {{
        backgroundColor : 'white'
      }}>{response}</Text>
    </View>
  )
}

export default OpenAI