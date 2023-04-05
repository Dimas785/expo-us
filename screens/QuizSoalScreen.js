import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView, Image, Alert, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import Title from '../components/Title';
import Constants from 'expo-constants';
import Banner from '../components/Banner';
import InputCustom from '../components/Input';
import Card from '../components/Card';
import axios from 'axios';

const jawaban = { a: 1, b: 2, c: 3, d: 4, e: 5 }

const QuizSoalScreen = () => {
    const [data, setData] = useState([]);
    const [selectedData, setSelectedData] = useState({})
    const [answer, setAnswer] = useState('A')
    useEffect(() => {
        axios
            .get('https://6358-36-73-35-214.ap.ngrok.io/api/quizzes', {
            }) // Ambil data materi dari API
            .then((response) => {
                console.log(response)
                setData(response.data.data);
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
            });
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ padding: 15, margin: 20 }}>
                    <Text style={styles.text1}>Quiz 1 Lembaga Negara</Text>
                    <Text style={styles.text2}>Pengenalan Lembaga Negara</Text>
                    <View>
                        <Image source={require('../assets/chek.png')} style={{ width: 30, height: 25 }} />
                    </View>
                    <View>
                        <Text style={styles.text3}>14 : 59</Text>
                    </View>
                    <View>
                        <Text style={styles.text4}>Sisa Waktu :</Text>
                    </View>
                    <View style={{ marginVertical: 20, display: 'flex', flex: 1, width: '100%', position: 'relative', justifyContent: 'center', alignItem: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            data.map((item, index) =>{
                                return (
                                    <Pressable key={index} onPress={() => setSelectedData(item)} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', alignItems: 'center', marginHorizontal: 20 }}>
                                        <Text style={{ color: item.id == selectedData.id ? '#B835D9' : '#000',}}>{index + 1}</Text>
                                        {item.id == selectedData.id && <Image source={require('../assets/bulatan2.png')} style={{ margin: 50, padding: 20, position: 'absolute' }} />}
                                    </Pressable>
                                )
                            })
                        }
                    </View>
                    {
                        selectedData?.quiz &&( <>
                            <View>
                                <View style={{ display: 'flex', position: 'relative', justifyContent: 'center', alignItem: 'center', marginVertical: 15 }}>
                                    <Text style={{ fontSize: 13, color: '#A5A5A5' }}>{selectedData.quiz}</Text>
                                </View>
                                <Pressable onPress={() => setAnswer('A')} style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItem: 'center',
                                    borderColor: answer == 'A'? "#B835D9": "#AEAEAE",
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    padding: 16,
                                    marginVertical: 25
                                }}>
                                    <Image source={require('../assets/quiz1.png')} style={{}} />
                                    <Text style={{ fontSize: 13, marginLeft: 10 }}>{selectedData.a}</Text>
                                </Pressable>
                                <Pressable onPress={() => setAnswer('B')} style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItem: 'center',
                                    borderColor: answer == 'B'? "#B835D9": "#AEAEAE",
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    padding: 16,
                                    marginVertical: 25
                                }}>
                                    <Image source={require('../assets/quiz2.png')} style={{}} />
                                    <Text style={{ fontSize: 13, marginLeft: 10 }}>{selectedData.b}</Text>
                                </Pressable>
                                <Pressable onPress={() => setAnswer('C')} style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItem: 'center',
                                    borderColor: answer == 'C'? "#B835D9": "#AEAEAE",
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    padding: 16,
                                    marginVertical: 25
                                }}>
                                    <Image source={require('../assets/quiz3.png')} style={{}} />
                                    <Text style={{ fontSize: 13, marginLeft: 10 }}>{selectedData.c}</Text>
                                </Pressable>
                                <Pressable onPress={() => setAnswer('D')} style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItem: 'center',
                                    borderColor: answer == 'D'? "#B835D9": "#AEAEAE",
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    padding: 16,
                                    marginVertical: 25
                                }}>
                                    <Image source={require('../assets/quiz4.png')} style={{}} />
                                    <Text style={{ fontSize: 13, marginLeft: 10 }}>{selectedData.d}</Text>
                                </Pressable>
                            
                            </View>
                        </>)
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text1: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '800'
    },
    text2: {
        textAlign: 'center',
        fontSize: 13,
        color: '#A5A5A5'
    },
    text3: {
        textAlign: 'center',
        fontSize: 15,
        color: '#B835D9'
    },
    text4: {
        textAlign: 'center',
        fontSize: 15,
        color: '#A5A5A5'
    },
    button: {
        borderColor: '#B835D9',
        backgroundColor: '#B835D9'
    }
})

export default QuizSoalScreen;