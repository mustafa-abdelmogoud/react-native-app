import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
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
        id: '1234',
        name: 'nbjngbjnb',
        descriptions: ['gnbngb', 'bmgmbkmgb'],
      });
    }
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Diagnosis')}
    >
      <ListItem title={item} description='DR. Abdelrahman' />
    </TouchableOpacity>
  );

  return (
    <Layout style={styles.container}>
      <Header />
      {data ? (
        <Layout style={styles.container}>
          <View style={styles.info}>
            <Avatar
              style={styles.avatar}
              size='giant'
              source={require('../assets/avatar.png')}
            />
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
            <Icon style={styles.icon} name='activity' size={1} />
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
  avatar: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    margin: 2,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#1d8efa',
    borderRadius: 25,
    height: 50,
  },
  icon: {
    fontSize: 20,
  },
});
