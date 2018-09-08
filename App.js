import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from './src/components/index';

export default class App extends React.Component {
  render() {
    return (
      <View >
        <Header name={'Authentication'}/>
        <Text style={styles.wellcomeStyle} >WellCome To React App!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wellcomeStyle: {
    fontSize: 25
  }
});
