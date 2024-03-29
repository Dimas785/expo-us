import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import Title from "../components/Title";
import Constants from "expo-constants";
import Banner from "../components/Banner";
import InputCustom from "../components/Input";
import Card from "../components/Card";
import axios from "axios";

const dataLembaga = ["MPR", "Presiden", "BPK", "KPK", "DPR", "KPU", "MA", "MK"];
const lembaga = [
  {
    logo: require("../assets/1.png"),
    nama: "Presiden",
    deskripsi: "Presiden Republik Indonesia, umumnya . . .",
  },
  {
    logo: require("../assets/2.png"),
    nama: "DPR",
    deskripsi: "DPR - RI adalah salah satu lembaga tinggi . . .",
  },
  {
    logo: require("../assets/3.png"),
    nama: "BPK",
    deskripsi: "DPR - RI adalah salah satu lembaga tinggi . . .",
  },
  {
    logo: require("../assets/4.png"),
    nama: "KPK",
    deskripsi: "DPR - RI adalah salah satu lembaga tinggi . . .",
  },
];

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const [state, setState] = useState(null);

  const Search = (param) => {
    // console.log(param)
    if (data.length > 0 && param) {
      const result = data.filter((item, index) => item.judul_materi == param);
      setData(result);
    } else {
      setData(defaultData);
    }
  };

  const SearchById = (param) => {
    if (state == param) {
      setState("");
      setData(defaultData);
    } else {
      if (data.length > 0 && param) {
        setState(param);
        const result = data.filter((item, index) => item.id == param);
        setData(result);
      } else {
        setData(defaultData);
      }
    }
  };
  console.log(process.env.url, "ini url");
  useEffect(() => {
    axios
      .get("https://428f-223-255-229-75.ngrok-free.app/api/materi", {}) // Ambil data materi dari API
      .then((response) => {
        setData(response.data.data);
        setDefaultData(response.data.data);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  }, []);

  useEffect(() => {}, [state]);
  useEffect(() => {}, [state]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView>
        <Layout style={styles.container}>
          <Title />
          <Banner />
          <InputCustom action={Search} />
          <View
            style={{
              marginVertical: 24,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <Text category="h6">Lembaga Negara</Text>
            <Text category="s1" style={{ color: "#B835D9" }}>
              Lainnya
            </Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{ height: "100%" }}>
            {defaultData.map((item, index) => {
              return (
                <Button
                  status="basic"
                  key={index}
                  onPress={() => SearchById(item.id)}
                  style={{
                    color: "green",
                    height: 40,
                    minWidth: 65,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    backgroundColor:
                      state == item.id ? "#B835D9" : "whitesmoke",
                    borderWidth: 0,
                    marginRight: 15,
                  }}
                  size="tiny">
                  <Text
                    style={{
                      color: state == item.id ? "#fff" : "#000",
                    }}></Text>
                  {item.judul_materi}
                </Button>
              );
            })}
          </ScrollView>
          <View
            style={{
              marginVertical: 24,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <Text category="h6">Lembaga Negara</Text>
            <Text category="s1" style={{ color: "#B835D9" }}>
              Lainnya
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: "100%",
              flexWrap: "wrap",
              flexDirection: "row",
              rowGap: 10,
              columnGap: 10,
              justifyContent: "space-around",
            }}>
            {data.map((item, index) => {
              return (
                <Card
                  onPress={() =>
                    navigation.navigate("Soal", { nama: item.judul_materi })
                  }
                  key={index}
                  nama={item.judul_materi}
                  deskripsi={item.isi_materi}
                  image={require("../assets/1.png")}
                />
              );
            })}
          </View>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    padding: 24,
  },
});

export default HomeScreen;
