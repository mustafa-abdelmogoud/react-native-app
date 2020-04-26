import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Input, Text, Button } from '@ui-kitten/components';

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState({});

  return (
    <Layout style={styles.container} level='1'>
      <Text style={styles.logo} category='h1'>
        Medica
      </Text>
      <Input
        style={styles.inputView}
        placeholder='Name'
        size='medium'
        value={state.name}
        onChangeText={(nextValue) => setState({ ...state, name: nextValue })}
      />
      <Input
        style={styles.inputView}
        placeholder='Your national ID'
        size='medium'
        value={state.id}
        onChangeText={(nextValue) => setState({ ...state, id: nextValue })}
      />
      <Button
        style={styles.login}
        onPress={() => navigation.navigate('Home', { id: state.id })}
      >
        Login
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    fontWeight: 'bold',
    color: '#1d8efa',
    fontSize: 50,
    marginBottom: 20,
  },
  login: {
    marginTop: 20,
    width: '40%',
    backgroundColor: '#1d8efa',
    borderRadius: 25,
    height: 50,
  },
  inputView: {
    width: '120%',
    borderRadius: 25,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 10,
  },
});
