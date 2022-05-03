import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.roundedRectangle}>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34459F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundedRectangle: {
    width: 290,
    height: 80,
    backgroundColor: "black",
    borderRadius: 50,
  }
});

