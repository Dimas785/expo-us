import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import Title from '../components/Title';
import Constants from 'expo-constants';
import Banner from '../components/Banner';
import InputCustom from '../components/Input';
import Card from '../components/Card';
import axios from 'axios';

const dataLembaga = ['MPR', 'Presiden', 'BPK', 'KPK', 'DPR', 'KPU', 'MA', 'MK'];
const lembaga = [
  {
    logo: require('../assets/1.png'),
    nama: 'Presiden',
    deskripsi: 'Presiden Republik Indonesia, umumnya . . .',

  },
  {
    logo: require('../assets/2.png'),
    nama: 'DPR',
    deskripsi: 'DPR - RI adalah salah satu lembaga tinggi . . .',

  },
  {
    logo: require('../assets/3.png'),
    nama: 'BPK',
    deskripsi: 'DPR - RI adalah salah satu lembaga tinggi . . .',

  },
  {
    logo: require('../assets/4.png'),
    nama: 'KPK',
    deskripsi: 'DPR - RI adalah salah satu lembaga tinggi . . .',

  },
];


const HomeScreen = ({ navigation }) => {
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

  const [state, setState] = useState(null);
  const onClick = (item) => () => {
    setState(item);
  };

  useEffect(() => {
    console.log(state)
  }, [state]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Layout style={styles.container}>
          <Title />
          <Banner />
          <InputCustom />
          <View style={{ marginVertical: 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text category='h6'>Lembaga Negara</Text>
            <Text category='s1' style={{ color: '#B835D9' }}>Lainnya</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ height: '100%' }} >
            {
              data.map((item, index) => {
                return (<Button status='basic' key={index} onPress={onClick(item.id)} style={{ height: 40, minWidth: 65, paddingHorizontal: 10, borderRadius: 10, backgroundColor: state == item.id ? '#B835D9' : 'whitesmoke', borderWidth: 0, marginRight: 15, }} size='tiny'>
                  <Text style={{ color: state == item.id ? '#fff' : '#000' }}>{item.judul_materi}</Text>
                </Button>)
              })
            }
          </ScrollView>
          <View style={{ marginVertical: 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}> 
            <Text category='h6'>Lembaga Negara</Text>
            <Text category='s1' style={{ color: '#B835D9' }}>Lainnya</Text>
          </View>
          <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', rowGap: 10, columnGap: 10, justifyContent: 'space-around', }}>
            {
              data.map((item, index) => {
                return (<Card onPress={() => navigation.navigate('Soal', { nama: item.judul_materi })} key={index} nama={item.judul_materi} deskripsi={item.isi_materi} image={require('../assets/1.png')} />)
              })
            }
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