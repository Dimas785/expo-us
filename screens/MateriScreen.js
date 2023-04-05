import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from 'react';
import Constants from "expo-constants";
import Banner from "../components/Banner";
import { Icon, Input, Text } from "@ui-kitten/components";
import axios from "axios";

// list array of object
const dataCard = [
  {
    icon: require("../assets/1.png"),
    headerText: "Presiden",
    body: "Presiden Republik Indonesia, umumnya disingkat sebagai Presiden Indonesia adalah kepala . . .",
    footer: [
      {
        icon: require("../assets/note2.png"),
        text: "1 Sub Materi",
      },
      {
        icon: require("../assets/profile-2user.png"),
        text: "+ 500 Partisipas",
      },
    ],
  },

  {
    icon: require("../assets/people.png"),
    headerText: "Dewan Perwakilan Rakyat",
    body: "Dewan Perwakilan Rakyat Republik Indonesia, umumnya disebut Dewan Perwakilan Rakyat . . ",
    footer: [
      {
        icon: require("../assets/note2.png"),
        text: "1 Sub Materi",
      },
      {
        icon: require("../assets/profile-2user.png"),
        text: "+ 500 Partisipas",
      },
    ],
  },

  {
    icon: require("../assets/1.png"),
    headerText: "MPR",
    body: "Presiden Republik Indonesia, umumnya disingkat sebagai Presiden Indonesia adalah kepala . . .",
    footer: [
      {
        icon: require("../assets/note2.png"),
        text: "1 Sub Materi",
      },
      {
        icon: require("../assets/profile-2user.png"),
        text: "+ 500 Partisipas",
      },
    ],
  },
];

const MateriScreen = ({route, navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
      axios
          .get('https://6358-36-73-35-214.ap.ngrok.io/api/materi', {
          }) // Ambil data materi dari API
          .then((response) => {
              setData(response.data.data);
          })
          .catch((error) => {
              console.log(JSON.stringify(error));
          });
  }, []);
  const renderIcon = () => (
    <TouchableWithoutFeedback>
      <Icon name={"eye"} />
    </TouchableWithoutFeedback>
  );
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.textHeader}>Lembaga Negara</Text>
          <Text>Mengenal Lembaga Negara NKRI</Text>
        </View>
        <Banner />
        <View>
          <Input
            //value={value}
            size="small"
            placeholder="Cari Sesuatu"
            accessoryRight={renderIcon}
            style={{ height: 50, borderColor: "#A5A5A5", borderRadius: 12 }}
          />
        </View>
        <View>
          <Text style={styles.textMateri}>Materi</Text>
        </View>
        {/* card */}
        {data.map((item, index) => {
          return (
            <Pressable key={index} onPress={() => navigation.navigate('ReviewMateri', item)}>
            <View
              key={index}
              style={{
                borderColor: "#A5A5A5",
                borderWidth: 1,
                borderRadius: 10,
                padding: 16,
                marginBottom: 20,
              }}>
              {/* header */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: 25,
                }}>
                <Image source={require('../assets/people.png')} />
                <Text style={styles.textHeaderCard}>{item.judul_materi}</Text>
              </View>
              <View>
                <Text style={styles.textbodyCard}>{item.isi_materi}</Text>
              </View>
              {/* footer */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 20,
                }}>
                  <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        key={index}>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}>
                          <Image source={require('../assets/note2.png')} />
                          <Text style={{color: '#A5A5A5', fontSize: 12}}> +500 Partisipans
                          </Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            left: 45
                          }}>
                          <Image source={require('../assets/profile-2user.png')} />
                          <Text style={{color: '#A5A5A5', fontSize: 12}}> +500 Partisipans
                          </Text>
                        </View>
                        <View style={{ paddingHorizontal: 30 }} />
                      </View>
                  {/* {item.footer.map((itemfooter, index) => {
                    return (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        key={index}>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}>
                          <Image source={itemfooter.icon} />
                          <Text style={styles.textSubHeader}>
                            {itemfooter.text}
                          </Text>
                        </View>
                        <View style={{ paddingHorizontal: 30 }} />
                      </View>
                    );
                  })} */}
              </View>
            </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    padding: 24,
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 24,
  },
  textSubHeader: {
    fontSize: 14,
    paddingLeft: 6,
  },
  textMateri: {
    fontSize: 18,
    fontWeight: "800",
    paddingVertical: 24,
  },
  textHeaderCard: {
    fontSize: 16,
    fontWeight: "800",
    paddingLeft: 7,
  },
  textbodyCard: {
    fontSize: 12,
    color: "#A5A5A5",
  },
});

export default MateriScreen;
