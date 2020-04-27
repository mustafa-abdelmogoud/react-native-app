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
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation, route }) {
  const { id } = route.params;
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // const json = await fetch(`http://127.0.0.1:4000/search?id=${id}`);
      // const data = await json.json();
      // setData(data);
      setData({
        id: '1234',
        name: 'Patient1',
        diagnosis: [
          {
            doctor: 'Abdelrhman Saied',
            description: 'description one',
            hospital: 'Jeeda Hospital',
            diagnose: 'Flu',
            symptoms: ['symptom1'],
            treatments: ['treatment1'],
          },
          {
            doctor: 'Abdelrhman Saied',
            description: 'description two',
            hospital: 'Jeeda Hospital',
            diagnose: 'Covid-19',
            symptoms: ['symptom1'],
            treatments: ['treatment1'],
          },
        ],
      });
    }
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Diagnosis', { diagnose: item })}
    >
      <Text style={styles.diagnose}> {item.diagnose} </Text>
      <View style={styles.description}>
        <Text>Dr {item.doctor}</Text>
        <Text>{item.hospital}</Text>
      </View>
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
            data={data.diagnosis}
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
    alignSelf: 'center',
  },
  button: {
    margin: 2,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#1d8efa',
    borderRadius: 25,
    height: 50,
  },
  item: {
    margin: 5,
    backgroundColor: '#fff',
    padding: 10,
  },
  icon: {
    fontSize: 15,
  },
  diagnose: {
    fontWeight: 'bold',
  },

  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
