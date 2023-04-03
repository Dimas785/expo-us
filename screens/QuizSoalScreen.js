import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import Title from '../components/Title';
import Constants from 'expo-constants';
import Banner from '../components/Banner';
import InputCustom from '../components/Input';
import Card from '../components/Card';

const QuizSoalScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ padding: 15, margin: 20 }}>
                    <Text style={styles.text1}>Quiz 1 Lembaga Negara</Text>
                    <Text style={styles.text2}>Pengenalan Lembaga Negara</Text>
                    <View>
                        <Image source={require('../assets/chek.png')} style={{ width: 30, height: 25, left: 300, top: -12 }} />
                    </View>
                    <View>
                        <Text style={styles.text3}>14 : 59</Text>
                    </View>
                    <View>
                        <Text style={styles.text4}>Sisa Waktu :</Text>
                    </View>
                    <View>
                        <Text style={{ top: 80, left: 25, color: '#B835D9', }}>1</Text>
                        <Image source={require('../assets/bulatan2.png')} style={{ margin: 50, padding: 20, left: -40 }} />
                    </View>
                    <View>
                        <Text style={{ top: -82, left: 95, fontWeight: '800', fontSize: 16 }}>2</Text>
                    </View>
                    <View>
                        <Text style={{ top: -102, left: 160, fontWeight: '800', fontSize: 16 }}>3</Text>
                    </View>
                    <View>
                        <Text style={{ top: -122, left: 220, fontWeight: '800', fontSize: 16 }}>4</Text>
                    </View>
                    <View>
                        <Text style={{ top: -142, left: 280, fontWeight: '800', fontSize: 16 }}>5</Text>
                    </View>
                    <View>
                        <Text style={{ top: -80, fontSize: 13, left: 5, color: '#A5A5A5' }}>MPR - RI melaksanakan sidang paling sedikit yaitu . . .</Text>
                    </View>
                    <View style={{
                        borderColor: "#B835D9",
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 16,
                        marginBottom: 20,
                        height: 50
                    }}>
                        <Text style={{left: 35, fontSize: 13, top: -2}}>1 kali dalam 5 tahun</Text>
                        <Image source={require('../assets/quiz1.png')} style={{top: -20}} />
                    </View>
                    <View style={{
                        borderColor: "#F3F3F3",
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 16,
                        marginBottom: 20,
                        height: 50,
                        top: 20
                    }}>
                        <Text style={{left: 35, fontSize: 13, top: -2}}>1 tahun  5 kali</Text>
                        <Image source={require('../assets/quiz2.png')} style={{top: -20}} />
                    </View>
                    <View style={{
                        borderColor: "#F3F3F3",
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 16,
                        marginBottom: 20,
                        height: 50,
                        top: 30
                    }}>
                        <Text style={{left: 35, fontSize: 13, top: -2}}>1 tahun 1 kali</Text>
                        <Image source={require('../assets/quiz3.png')} style={{top: -20}} />
                    </View>
                    <View style={{
                        borderColor: "#F3F3F3",
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 16,
                        marginBottom: 20,
                        height: 50,
                        top: 40
                    }}>
                        <Text style={{left: 35, fontSize: 13, top: -2}}>5 tahun 5 kali</Text>
                        <Image source={require('../assets/quiz4.png')} style={{top: -20}} />
                    </View>
                    <View style={{
                        borderColor: "#F3F3F3",
                        borderWidth: 1,
                        borderRadius: 10,
                        padding: 16,
                        marginBottom: 20,
                        height: 50,
                        top: 50
                    }}>
                        <Text style={{left: 35, fontSize: 13, top: -2}}>5 tahun 11 kali</Text>
                        <Image source={require('../assets/quiz5.png')} style={{top: -20}} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text1: {
        top: 20,
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '800'
    },
    text2: {
        top: 23,
        textAlign: 'center',
        fontSize: 13,
        color: '#A5A5A5'
    },
    text3: {
        top: 23,
        textAlign: 'center',
        fontSize: 15,
        color: '#B835D9'
    },
    text4: {
        top: 35,
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