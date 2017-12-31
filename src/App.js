import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

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
      }
    );
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
