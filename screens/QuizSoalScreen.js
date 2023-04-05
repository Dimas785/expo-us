import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import Title from '../components/Title';
import Constants from 'expo-constants';
import Banner from '../components/Banner';
import InputCustom from '../components/Input';
import Card from '../components/Card';
import axios from 'axios';

const QuizSoalScreen = () => {
    const [data, setData] = useState([]);
    console.log(data)
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
                        <Image source={require('../assets/chek.png')} style={{ width: 30, height: 25}} />
                    </View>
                    <View>
                        <Text style={styles.text3}>14 : 59</Text>
                    </View>
                    <View>
                        <Text style={styles.text4}>Sisa Waktu :</Text>
                    </View>
                    <View>
                    <View style={{display: 'flex', height: 50, backgroundColor: 'red'}}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', alignItems: 'center' }}>
                            <Text style={{ color: '#B835D9', }}>1</Text>
                            <Image source={require('../assets/bulatan2.png')} style={{ margin: 50, padding: 20, position: 'absolute' }} />
                        </View>
                    </View>
                    </View>
                    <View>
                        <Text style={{fontSize: 13, color: '#A5A5A5' }}>MPR - RI melaksanakan sidang paling sedikit yaitu . . .</Text>
                    </View>
                    <View style={{
                        borderColor: "#B835D9",
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 16,
                        marginBottom: 20,
                        height: 50
                    }}>
                        <Text style={{fontSize: 13}}>1 kali dalam 5 tahun</Text>
                        <Image source={require('../assets/quiz1.png')} style={{}} />
                    </View>
                    <View style={{
                        borderColor: "#F3F3F3",
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 16,
                        marginBottom: 20,
                        height: 50,
                    }}>
                        <Text style={{ fontSize: 13}}>1 tahun  5 kali</Text>
                        <Image source={require('../assets/quiz2.png')} style={{}} />
                    </View>
                    <View style={{
                        borderColor: "#F3F3F3",
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 16,
                        marginBottom: 20,
                        height: 50,
                    }}>
                        <Text style={{ fontSize: 13}}>1 tahun 1 kali</Text>
                        <Image source={require('../assets/quiz3.png')} style={{}} />
                    </View>
                    <View style={{
                        borderColor: "#F3F3F3",
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 16,
                        marginBottom: 20,
                        height: 50,
                    }}>
                        <Text style={{ fontSize: 13,}}>5 tahun 5 kali</Text>
                        <Image source={require('../assets/quiz4.png')} style={{}} />
                    </View>
                    <View style={{
                        borderColor: "#F3F3F3",
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 16,
                        marginBottom: 20,
                        height: 50,
                    }}>
                        <Text style={{ fontSize: 13}}>5 tahun 11 kali</Text>
                        <Image source={require('../assets/quiz5.png')} style={{}} />
                    </View>
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