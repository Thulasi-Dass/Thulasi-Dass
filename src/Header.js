import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#9c8210',
      }}>
      <Text style={styles.text}>Monkey-Chunky</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});
export default App;
