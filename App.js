import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {BaseColors} from './app/config/theme';
import {Provider} from 'react-redux';
import {persistor, store} from './app/redux/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const Auth = () => {
  <Stack.Navigator initialRouteName="IntroScreen">
    <Stack.Screen
      name="IntroScreen"
      component={IntroScreen}
      options={{headerShown: false}}
    />
    ;
  </Stack.Navigator>;
};
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor={BaseColors.white10} barStyle={'dark-content'}>
          <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
              name="SplashScreen"
              component={Auth}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </StatusBar>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BaseColors.black,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
