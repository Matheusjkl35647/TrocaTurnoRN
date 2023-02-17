import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';


import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
        <View style={styles.getStartedContainer}>
            <Text style={styles.titleTela}>{path}</Text>
            <Image
                style={styles.logoCliente}
                source={require('../assets/images/icon.png')}
            />
        </View>
        <Text style={styles.titleDeveloper}>EM DESENVOLVIMENTO...</Text>
        <Text style={styles.title}>Solcitação ou demais dúvidas, entrar em contato com o suporte!</Text>
        <Text style={styles.title}>Desenvolvido por Matheus Jhonatan dos Santos</Text>
        <Text style={styles.title}>Copyright © 2022 | All rights reserved.</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginVertical: 0,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  logoCliente: {
    width: 400,
    height: 80,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleDeveloper: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 50,
  },
  titleTela: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 50,
  },
  posicaoTela: {
    marginVertical: 0
  },
});
