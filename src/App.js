import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <View style={{flexDirection: 'row'}}><Button>Log Out</Button></View>
      case false:
        return <LoginForm />;
      default:
        return <View style={styles.spinnerStyle}><Spinner size="large"/></View>
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
    spinnerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      }
}

export default App;
