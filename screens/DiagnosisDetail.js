import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Layout,
  List,
  ListItem,
  Divider,
  Button,
  Card,
  Spinner,
  Text,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../components/header';

export default function LoginScreen({ navigation, route }) {
  const { diagnose } = route.params;

  return (
    <Layout style={styles.container}>
      <Card style={styles.card}>
        <Text category='h4'>Diagnose</Text>
        <Text>{diagnose.diagnose}</Text>
      </Card>
      <Card style={styles.card}>
        <Text category='h4'>Description</Text>
        <Text>{diagnose.description}</Text>
      </Card>
      {diagnose.symptoms.map((symptom) => (
        <Card style={styles.card}>
          <Text category='h4'>Symptom</Text>
          <Text>{symptom}</Text>
        </Card>
      ))}
      {diagnose.treatments.map((treatment) => (
        <Card style={styles.card}>
          <Text category='h4'>Treatment</Text>
          <Text>{treatment}</Text>
        </Card>
      ))}
      <Card style={styles.description}>
        <Text category='s1'>Dr {diagnose.doctor}</Text>
        <Text category='s1'>{diagnose.hospital}</Text>
      </Card>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    margin: 1,
  },
  description: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    
  },
});
