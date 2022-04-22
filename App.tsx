import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from './assets/warehouse.jpg';
import Stock from './components/Stock';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base}>
      <Text style={{color: '#fff', fontSize: 46, fontWeight: 'bold'}}>Lager-Appen</Text>
      <Image source={warehouse} style={{ width: 320, height: 240 }} />
      <Stock/>
      <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    backgroundColor: '#426E77'
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
});
