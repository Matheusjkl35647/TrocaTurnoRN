import { FontAwesome } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { SafeAreaView, SectionList, StyleSheet, Pressable, Image, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';

import Colors from '../constants/Colors';

import TelaDesenvolvimento from '../components/TelaDesenvolvimento';
import { Text, View } from '../components/Themed';





export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.Cliente}>
          <Image
            style={styles.PerfilCliente}
            source={require('../assets/images/user.png')}
          />
          <Text allowFontScaling={false}>Matheus Jhonatan</Text>
        </View>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
        <TelaDesenvolvimento path={"Tela de Usuário"} />

      </SafeAreaView>
      
      

      <Pressable style={styles.helpLink} onPress={handleHelpPress}>
        <FontAwesome
          name="whatsapp"
          size={25}
          color={Colors.dark.tint}
          style={{ marginRight: 15 }}
        />
        <Text allowFontScaling={false} lightColor={Colors.dark.tint}>Suporte</Text>
      </Pressable>

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
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  titleMenu: {
    paddingHorizontal: 25,
    fontSize: 25,
  },
  separator: {
    marginHorizontal: 35,
    height: 1,
    width: '80%',
  },
  helpContainer: {
    alignItems: 'center',
  },
  helpLink: {
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 10,
    backgroundColor: 'green',
  },
  header: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  item: {
    marginLeft: 15,
    padding: 5,
    fontSize: 18,
  },
  PerfilCliente: {
    width: 50,
    height: 50,
    margin: 10,
  },
  Cliente: {
    margin: 10,
    alignItems: 'center',
    justifyContent: "center",
  },
  pickerComponent: {
    width: 350,
  },
  opcao: {
    width: 350,
  },
  menuPadrao: {
    width: "100%",
    backgroundColor: "none",
    paddingHorizontal: 10,
    paddingTop: 2,
  },
});
