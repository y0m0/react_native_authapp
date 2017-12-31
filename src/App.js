import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyDmi54R3NUr9r8nU0wmHK2e75NF-J7Q51I',
        authDomain: 'react-authapp.firebaseapp.com',
        databaseURL: 'https://react-authapp.firebaseio.com',
        projectId: 'react-authapp',
        storageBucket: 'react-authapp.appspot.com',
        messagingSenderId: '777720702879'
      };
    )
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>My new App</Text>
      </View>
    );
  }
}

export default App;
