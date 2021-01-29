
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
 StatusBar
 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './Components/Auth/SignIn'
import BookLandingPage from "./Components/Books/BookLandingPage"
import BookInfo from './Components/Books/BookInfo';

const Stack = createStackNavigator();

const App = (props) => {
  return (
    <View style={style.container}>
                  <StatusBar barStyle="light-content" hidden={false} backgroundColor="black" translucent={true} />
      <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Login"
      >
        <Stack.Screen name="Login"  options={{ headerShown: false }} component={SignIn} />
        <Stack.Screen name="BookLandingPage"  options={{ headerShown: false }} component={BookLandingPage} />
        <Stack.Screen name="BookInfo"  options={{ headerShown: false }} component={BookInfo} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};



const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  }
})

export default App;


