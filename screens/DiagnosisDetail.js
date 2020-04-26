import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  Avatar,
  Layout,
  List,
  ListItem,
  Divider,
  Button,
  Spinner,
  Text
} from "@ui-kitten/components";
import Icon from "react-native-vector-icons/Feather";

import Header from "../components/header";

export default function LoginScreen({ navigation, route }) {
  const { diagnose } = route.params;

  return (
    <Layout style={styles.container}>
      <Text>{diagnose.description}</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
