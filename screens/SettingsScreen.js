import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Extrato de Pontos',
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Text>Histórico de Pontos</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
