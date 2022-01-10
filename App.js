/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text
} from 'react-native';



const App = () => {

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:50, fontWeight:'bold'}} >myTutor App</Text>
      <Text style={{fontSize:20, fontStyle:'italic'}} >find your homr tutor here</Text>
    </View>
  );
};

export default App;
