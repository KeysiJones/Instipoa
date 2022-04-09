import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
} from 'react-native';

//import {Colors} from 'react-native/Libraries/NewAppScreen';

const DiasSemana = ({navigation, route}) => {
  const themeColor = '#1ad597';
  const backgroundStyle = {
    backgroundColor: '#ffffff',
    height: Platform.OS === 'web' ? '96vh' : '100%',
  };

  const containerStyle = {
    padding: 12,
    backgroundColor: '#ffffff',
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
      borderRadius: 10,
      backgroundColor: themeColor,
      height: 50,
      width: Platform.OS === 'web' ? '85vw' : '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backButton: {
      borderRadius: 50,
      backgroundColor: themeColor,
      marginTop: 50,
      height: 50,
      width: Platform.OS === 'web' ? '85vw' : '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
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
              underlayColor="#00ffac40"
              style={styles.button}
              onPress={() =>
                navigation.navigate('CursosDisponiveis', {cursos: aulas.terca})
              }>
              <Text style={styles.buttonText}>Terça</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonSpacing}>
            <TouchableHighlight
              underlayColor="#00ffac40"
              style={styles.button}
              onPress={() =>
                navigation.navigate('CursosDisponiveis', {cursos: aulas.quarta})
              }>
              <Text style={styles.buttonText}>Quarta</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonSpacing}>
            <TouchableHighlight
              underlayColor="#00ffac40"
              style={styles.button}
              onPress={() =>
                navigation.navigate('CursosDisponiveis', {cursos: aulas.quinta})
              }>
              <Text style={styles.buttonText}>Quinta</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonSpacing}>
            <TouchableHighlight
              underlayColor="#00ffac40"
              style={styles.button}
              onPress={() =>
                navigation.navigate('CursosDisponiveis', {cursos: aulas.sabado})
              }>
              <Text style={styles.buttonText}>Sábado</Text>
            </TouchableHighlight>
          </View>
          {Platform.OS === 'web' ? (
            <View style={styles.buttonSpacing}>
              <TouchableHighlight
                underlayColor="#00ffac40"
                style={styles.backButton}
                onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar à página inicial</Text>
              </TouchableHighlight>
            </View>
          ) : (
            false
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export {DiasSemana};
