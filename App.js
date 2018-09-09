import React from 'react';
import { View } from 'react-native';
import { Header } from './src/components/index';
import firebase from 'firebase';
import LoginForm from './src/components/LoginScreen/loginForm';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({

    });
  }

  render() {
    return (
      <View >
        <Header name={'Authentication App '} />
        <LoginForm />
      </View>
    );
  }
}
