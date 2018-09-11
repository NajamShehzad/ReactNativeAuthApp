import React from 'react';
import { View } from 'react-native';
import { Header } from './src/components/index';
import firebase from 'firebase';
import LoginForm from './src/components/LoginScreen/loginForm';
import firebaseKey from './firebaseApi';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp(firebaseKey);
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
