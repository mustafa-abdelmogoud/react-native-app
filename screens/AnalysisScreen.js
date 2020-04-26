import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  Layout,
  Divider,
  List,
  Card,
  Spinner,
  Text
} from "@ui-kitten/components";
import { Bar } from "react-native-progress";

export default function LoginScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const json = await fetch("http://127.0.0.1:5000/analyze");
      const data = await json.json();
      setData(data);
    }
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    const [key, value] = Object.entries(item)[0];
    return (
      <Card style={styles.card} status="basic">
        <Text>{`${key} - ${(value * 100).toFixed(2)} %`}</Text>
        <Bar progress={+value} size={30} width={null} height={30} />
      </Card>
    );
  };

  return (
    <Layout style={styles.container}>
      {data ? (
        <>
          <Text style={styles.title}>Based on your medical history </Text>
          <List
            data={data}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        </>
      ) : (
        <Spinner status="primary" />
      )}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10
  },
  card: {
    marginVertical: 4
  }
});
