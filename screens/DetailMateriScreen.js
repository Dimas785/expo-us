import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Alert,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import Title from "../components/Title";
import Constants from "expo-constants";
import axios from "axios";

const DetailMateriScreen = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios
      .get(
        "https://428f-223-255-229-75.ngrok-free.app/api/materi/" +
          route.params.id,
        {},
      ) // Ambil data materi dari API
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView>
        <View style={{ margin: 30, padding: 40 }}>
          <Text style={styles.text1}>{data.judul_materi}</Text>
        </View>

        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/back.png")}
              style={{ top: -185, margin: 90, left: -60 }}
            />
          </Pressable>
        </View>
        <View>
          <Image
            source={require("../assets/more.png")}
            style={{ top: -295, left: 330 }}
          />
        </View>
        <View>
          <Text style={styles.text2}>Lembaga Negara Indonesia</Text>
        </View>
        <View>
          <Text style={styles.text3}>{data.isi_materi}</Text>
          {/* <Text style={styles.text3}>{route.params.body}</Text> */}
          {/* {data
                        .filter((item) => item.id === 15)
                        .map((item) => (
                            <View key={item.id} style={styles.item}>
                                Tampilkan judul materi
                                <Text style={styles.title}>{item.judul_materi}</Text>

                                Tampilkan isi materi
                                <View style={styles.content}>
                                    <Text style={styles.text}>{item.isi_materi}</Text>
                                </View>
                            </View>
                        ))} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  text2: {
    textAlign: "center",
    fontSize: 13,
    color: "#A5A5A5",
    top: -295,
  },
  text3: {
    textAlign: "justify",
    padding: 15,
    top: -250,
    color: "#A5A5A5",
    fontSize: 13,
  },
});

export default DetailMateriScreen;
