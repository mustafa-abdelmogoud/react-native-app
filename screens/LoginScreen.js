import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Input, Text, Button } from "@ui-kitten/components";

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState({});

  return (
    <Layout style={styles.container} level="1">
      <Text style={styles.logo} category="h1">
        Medica
      </Text>
      <Input
        placeholder="name"
        size="medium"
        value={state.name}
        onChangeText={nextValue => setState({ ...state, name: nextValue })}
      />
      <Input
        placeholder="your national ID"
        size="medium"
        value={state.id}
        onChangeText={nextValue => setState({ ...state, id: nextValue })}
      />
      <Button
        style={styles.login}
        onPress={() => navigation.navigate("Home", { id: state.id })}
      >
        Login
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  logo: {
    marginBottom: 20
  },
  login: {
    marginTop: 5
  }
});
