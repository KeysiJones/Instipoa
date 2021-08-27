import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const DiasSemana = ({navigation, route}) => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    height: '100%',
  };

  const containerStyle = {
    padding: 12,
    backgroundColor: Colors.lighter,
  };

  const contentContainerStyle = {
    alignItems: 'center',
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    width: '160%',
  };

  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      alignItems: 'center',
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    button: {
      borderRadius: 8,
      backgroundColor: '#cf4f66',
      height: 45,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: Colors.lighter,
      textAlign: 'center',
      fontSize: 15,
    },
    buttonSpacing: {
      marginVertical: 10,
    },
  });

  const aulas = route.params.aulas;

  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={contentContainerStyle}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <View style={styles.buttonSpacing}>
            <TouchableHighlight
              underlayColor="#cf4f668c"
              style={styles.button}
              onPress={() =>
                navigation.navigate('CursosDisponiveis', {cursos: aulas.terca})
              }>
              <Text style={styles.buttonText}>Terça</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonSpacing}>
            <TouchableHighlight
              underlayColor="#cf4f668c"
              style={styles.button}
              onPress={() =>
                navigation.navigate('CursosDisponiveis', {cursos: aulas.quarta})
              }>
              <Text style={styles.buttonText}>Quarta</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonSpacing}>
            <TouchableHighlight
              underlayColor="#cf4f668c"
              style={styles.button}
              onPress={() =>
                navigation.navigate('CursosDisponiveis', {cursos: aulas.quinta})
              }>
              <Text style={styles.buttonText}>Quinta</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonSpacing}>
            <TouchableHighlight
              underlayColor="#cf4f668c"
              style={styles.button}
              onPress={() =>
                navigation.navigate('CursosDisponiveis', {cursos: aulas.sabado})
              }>
              <Text style={styles.buttonText}>Sábado</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export {DiasSemana};
