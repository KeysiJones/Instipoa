import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableHighlight,
  Platform,
} from 'react-native';

//import {Colors} from 'react-native/Libraries/NewAppScreen';

const CursosDisponiveis = ({navigation, route}) => {
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
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
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
      backgroundColor: '#00ffac',
      height: 55,
      width: Platform.OS === 'web' ? '85vw' : '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    backButton: {
      borderRadius: 50,
      backgroundColor: '#00ffac',
      marginTop: 50,
      height: 55,
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

  const cursos = route.params.cursos;

  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={contentContainerStyle}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          {cursos.map(curso => {
            return (
              <View style={styles.buttonSpacing} key={curso.id}>
                <TouchableHighlight
                  underlayColor="#00ffac40"
                  style={styles.button}
                  onPress={() => Linking.openURL(curso.link)}>
                  <Text
                    style={
                      styles.buttonText
                    }>{`${curso.horario} - ${curso.nome}`}</Text>
                </TouchableHighlight>
              </View>
            );
          })}
          {Platform.OS === 'web' ? (
            <View style={styles.buttonSpacing}>
              <TouchableHighlight
                underlayColor="#00ffac40"
                style={styles.backButton}
                onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar</Text>
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

export {CursosDisponiveis};
