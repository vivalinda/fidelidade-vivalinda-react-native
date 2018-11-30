import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Pontuação',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Logado com Sucesso</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#27408a',
  },
  text: {
    fontSize: 20,
    color: '#fff'
  }
});
