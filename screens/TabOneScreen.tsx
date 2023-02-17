import { StyleSheet, TouchableOpacity,Image } from 'react-native';
import React, {useState} from 'react';
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import AgendaUsuario from '../components/Agenda';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {



  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleHelpPress}
        style={styles.touchableOpacityStyle}>
         <FontAwesome
          name="plus-circle"
          size={60}
          
          style={styles.CircleButton}
        />
      </TouchableOpacity>
      <AgendaUsuario />
        
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
    
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://api.whatsapp.com/send?phone=55011972317718'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*justifyContent: 'center',*/
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    zIndex: 100
  },
  CircleButton: {
    marginRight: 15,
    backgroundColor: 'white',
    paddingHorizontal: 3,
    borderRadius: 100,
    color: 'green',
    textShadowColor: '2 2 4 #000000',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});
