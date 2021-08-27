import React from 'react';
import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DiasSemana} from './android/components/dias-semana';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CursosDisponiveis} from './android/components/cursos-disponiveis';

const App = () => {
  const Stack = createNativeStackNavigator();
  const DefaultScreenOptions = {
    title: 'Instituto Porto Alegre',
    headerTitleAlign: 'center',
    headerTintColor: '#ffffff',
    animation: 'slide_from_right',
    headerStyle: {
      backgroundColor: '#cf4f66',
    },
  };

  const DiasSemanaScreenOptions = {
    title: 'Escolha o dia',
    headerTitleAlign: 'center',
    headerTintColor: '#ffffff',
    animation: 'slide_from_right',
    headerStyle: {
      backgroundColor: '#cf4f66',
    },
  };

  const CursosDisponiveisScreenOptions = {
    title: 'Escolha o curso',
    headerTitleAlign: 'center',
    headerTintColor: '#ffffff',
    animation: 'slide_from_right',
    headerStyle: {
      backgroundColor: '#cf4f66',
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={DefaultScreenOptions}
          component={HomeScreen}
        />
        <Stack.Screen
          name="DiasSemana"
          options={DiasSemanaScreenOptions}
          component={DiasSemana}
        />
        <Stack.Screen
          name="CursosDisponiveis"
          options={CursosDisponiveisScreenOptions}
          component={CursosDisponiveis}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
});

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
    justifyContent: 'center',
    flex: 1,
    width: '120%',
  };

  const [aulas, setAulas] = useState([]);

  const fetchCourses = () => {
    console.log('bora pegar dados da api');
    fetch(
      'https://backend-instituto.herokuapp.com/aulas/6128177affc6504f682dbb81',
    )
      .then(res => res.json())
      .then(aulasRetornadas => {
        setAulas(aulasRetornadas);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentContainerStyle={contentContainerStyle}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          {aulas._id ? (
            <>
              <View style={{marginVertical: 10}}>
                <TouchableHighlight
                  underlayColor="#cf4f668c"
                  style={styles.button}
                  onPress={() => navigation.navigate('DiasSemana', {aulas})}>
                  <Text style={styles.buttonText}>Aulas</Text>
                </TouchableHighlight>
              </View>
              <View style={{marginVertical: 10}}>
                <TouchableHighlight
                  underlayColor="#cf4f668c"
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL(
                      'https://docs.google.com/forms/d/e/1FAIpQLSd0y43FbhjFRI62qL42DezLBjtwC6nhubskd_JVlxH3js4hbw/viewform',
                    )
                  }>
                  <Text style={styles.buttonText}>Matricula</Text>
                </TouchableHighlight>
              </View>
              <View style={{marginVertical: 10}}>
                <TouchableHighlight
                  underlayColor="#cf4f668c"
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL('https://githobby.vercel.app/')
                  }>
                  <Text style={styles.buttonText}>
                    Contato do desenvolvedor *
                  </Text>
                </TouchableHighlight>
              </View>
            </>
          ) : (
            <>
              <ActivityIndicator size={60} color="#cf4f66" />
              <Text style={{fontSize: 20, marginBottom: 100, marginTop: 70}}>
                Carregando cursos disponíveis...
              </Text>
            </>
          )}
          <View>
            <Text style={{fontSize: 15, textAlign: 'center'}}>
              *App Desenvolvido por Keysi Jones
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
