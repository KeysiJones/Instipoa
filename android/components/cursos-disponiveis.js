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
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const CursosDisponiveis = ({navigation, route}) => {
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
      borderRadius: 8,
      backgroundColor: '#cf4f66',
      height: 45,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
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
                  underlayColor="#cf4f668c"
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export {CursosDisponiveis};
