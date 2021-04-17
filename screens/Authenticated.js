import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Authenticated() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>You're Logged in</Text>
      <View style={{ marginTop: 30 }}>
        <Button color="#ff5c5c"  title="Signout" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightblue',
    width: 300,
    marginVertical: 30,
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 25,
  },
});
