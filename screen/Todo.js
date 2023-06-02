import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
          placeholder="할 일"
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonLabel}>추가</Text>
        </TouchableOpacity>
      </View>

      {todos.map((todo, index) => (
        <View key={index} style={styles.todoContainer}>
          <Text style={styles.todoText}>{todo}</Text>
          <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTodo(index)}>
            <Text style={styles.deleteButtonLabel}>삭제</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor : 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  addButton: {
    marginLeft: 10,
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  addButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth : 2, 
    borderRadius : 7, 
    borderColor : '#006AFF'
  },
  todoText: {
    flex: 1,
    fontSize: 16, 
    fontWeight : 'bold'
  },
  deleteButton: {
    paddingHorizontal: 10,
    height: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  deleteButtonLabel: {
    color: 'white',
  },
});


export default ToDo;