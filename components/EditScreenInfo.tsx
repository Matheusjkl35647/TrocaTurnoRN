import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';


import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Image
          style={styles.logoCliente}
          source={require('../assets/images/icon.png')}
        />
        
      </View>

      
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
    width: 100,
    height: 20,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
});
