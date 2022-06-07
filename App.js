import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';
import Header from './src/Header';
const Separator = () => <View style={styles.separator} />;
const App = () => {
  return (
    <>
      <Header />
      <SafeAreaView style={{flex: 1, backgroundColor: '#EFFFEF'}}>
        {/* <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: '#9c8210',
            flex: 0.12,
            justifyContent: 'center',
          }}>
          <Text style={styles.text}>{'Monkey-Chunky'}</Text>
        </View> */}
        <Separator />
        <View style={{marginLeft: 130, justifyContent: 'center'}}>
          <Image
            source={{
              resizeMethod: 'scale',
              width: 130,
              height: 130,
              uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',
            }}
          />
        </View>
        <Separator />

        <TextInput
          style={styles.input}
          textAlign="center"
          defaultValue="Type any word"
        />
        {/* <View
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 4,
    <Button
      title="Go"
      color="darkblue"
      style={{display: 'inline-block', width: '200px'}}
      onPress={() => Alert.alert('Saved!')}
    />
  {/* </View> */}
        <View
          style={{
            position: 'relative',
            marginTop: 4,
            width: 160,
            paddingLeft: 50,
            marginLeft: 100,
            paddingRight: 10,
          }}>
          <Button
            title="Go"
            color="#123456"
            onPress={() => Alert.alert('Saved!')}
          />
        </View>
        <Separator />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 40,
    borderWidth: 4,
    padding: 7,
  },
  separator: {
    marginVertical: 4,
    // borderBottomColor: '#737373',
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
