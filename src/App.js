import React from 'react';
import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DiasSemana} from './components/dias-semana';
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
  Platform,
  Image,
  Dimensions,
} from 'react-native';

import salvador from './images/salvador.jpg';

//import {Colors} from '../node_modules/react-native/Libraries/NewAppScreen';
import {CursosDisponiveis} from './components/cursos-disponiveis';

const App = () => {
  const Stack = createNativeStackNavigator();
  const DefaultScreenOptions = {
    title: 'Instituto Porto Alegre',
    headerTitleAlign: 'center',
    headerTintColor: '#ffffff',
    animation: 'slide_from_right',
    headerStyle: {
      backgroundColor: '#00ffac',
    },
  };

  const DiasSemanaScreenOptions = {
    title: 'Escolha o dia',
    headerTitleAlign: 'center',
    headerTintColor: '#ffffff',
    animation: 'slide_from_right',
    headerStyle: {
      backgroundColor: '#00ffac',
    },
  };

  const CursosDisponiveisScreenOptions = {
    title: 'Escolha o curso',
    headerTitleAlign: 'center',
    headerTintColor: '#ffffff',
    animation: 'slide_from_right',
    headerStyle: {
      backgroundColor: '#00ffac',
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
  bar: {
    borderRadius: 0,
    marginTop: -10,
    backgroundColor: '#00ffac',
    height: 50,
    width: Platform.OS === 'web' ? '100%' : '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  barButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#00ffac',
    height: 50,
    width: Platform.OS === 'web' ? '85vw' : '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'white',
    height: Platform.OS === 'web' ? '85vh' : '100%',
  };

  const containerStyle = {
    padding: 0,
    backgroundColor: 'white',
  };

  const contentContainerStyle = {
    alignItems: 'center',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  };

  const [aulas, setAulas] = useState([]);

  const fetchCourses = () => {
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

  const windowWidth = Dimensions.get('window').width;

  const width = '85vw';
  const height = windowWidth >= 463 ? '50vh' : '30vh';

  const styles2 = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      borderRadius: 10,
      marginTop: -50,
      marginBottom: 10,
      width: Platform.OS === 'web' ? width : 350,
      height: Platform.OS === 'web' ? height : 175,
    },
  });

  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar
        animated={true}
        backgroundColor="#00ffac"
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
      />
      {Platform.OS === 'web' ? (
        <View style={{marginVertical: 10}}>
          <TouchableHighlight underlayColor="#00ffac" style={styles.bar}>
            <Text style={styles.barButtonText}>Instituto Porto Alegre</Text>
          </TouchableHighlight>
        </View>
      ) : (
        false
      )}
      <ScrollView
        contentContainerStyle={contentContainerStyle}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: Platform.OS === 'web' ? 'center' : null,
          }}>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              marginBottom: Platform.OS === 'web' ? 20 : -100,
            }}
          />
          {aulas._id && windowWidth < 1000 ? (
            <Image style={styles2.logo} source={salvador} />
          ) : null}
          {aulas._id ? (
            <>
              <View style={{marginVertical: 10}}>
                <TouchableHighlight
                  underlayColor="#00ffac"
                  style={styles.button}
                  onPress={() => navigation.navigate('DiasSemana', {aulas})}>
                  <Text style={styles.buttonText}>Aulas</Text>
                </TouchableHighlight>
              </View>
              <View style={{marginVertical: 10}}>
                <TouchableHighlight
                  underlayColor="#00ffac"
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
                  underlayColor="#00ffac"
                  style={styles.button}
                  onPress={() =>
                    Linking.openURL('https://keysijones.vercel.app/')
                  }>
                  <Text style={styles.buttonText}>Sobre o desenvolvedor</Text>
                </TouchableHighlight>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: 'center',
                  fontStyle: 'italic',
                  fontWeight: '500',
                  padding: 5,
                }}>
                *Desenvolvido por{' '}
                <Text style={{fontWeight: '700', fontStyle: 'italic'}}>
                  Keysi Jones
                </Text>
              </Text>
            </>
          ) : (
            <>
              <ActivityIndicator size={60} color="#cf4f66" />
              <Text style={{fontSize: 20, marginBottom: 100, marginTop: 70}}>
                Carregando cursos disponíveis...
              </Text>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
