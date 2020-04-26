import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Layout,
  List,
  ListItem,
  Divider,
  Button,
  Spinner,
  Text,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../components/header';

export default function LoginScreen({ navigation, route }) {
  const { id } = route.params;
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // const json = await fetch(`http://127.0.0.1:4000/search?id=${id}`);
      // const data = await json.json();
      // setData(data);
      setData({
        doctor: 'Abdelrhman Saied',
        description: 'description one',
        hospital: 'Jeeda Hospital',
        diagnosis: '',
        symptoms: ['symptom1'],
        treatments: ['treatment1'],
      });
    }
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <ListItem title={item} description='DR. Abdelrahman' />
  );

  return (
    <Layout style={styles.container}>
      <Header />
      {data ? (
        <Layout style={styles.container}>
          <View style={styles.info}>
            <Text style={styles.name}>{data.name}</Text>
          </View>

          <List
            data={data.descriptions}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />

          <Button
            style={styles.button}
            onPress={() => navigation.navigate('Analysis')}
          >
            <Icon name='activity' size={15} />
            Analyze
          </Button>
        </Layout>
      ) : (
        <Spinner status='primary' />
      )}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    alignSelf: 'center',
  },

  name: {
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    margin: 2,
  },
});
