import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

   // reset the error state everytime the button is pressed
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({error: 'Authentication Failed.'});
          });
      });
  };

  renderButton () {
     if (this.state.loading) return <Spinner size="small" />;

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );

  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@mail.com"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errTextStyle: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
  }
}
export default LoginForm;
