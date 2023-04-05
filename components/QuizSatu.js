import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import Title from '../components/Title';
import Constants from 'expo-constants';
import Banner from '../components/Banner';
import InputCustom from '../components/Input';
import Card from '../components/Card';
import axios from 'axios';

const QuizSatu = ({ navigation, item }) => {
    const [data, setData] = useState([]);
    
    return (
        <View style={{ padding: 10, marginHorizontal: 20, marginVertical: 5 }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={{ backgroundColor: '#FCF0FE', padding: 12, width: 50, borderRadius: 12 }}>
                    <Image source={require('../assets/book.png')} />
                </View>
                <View style={{marginHorizontal: 5}}></View>
                <View style={{}}>
                    <Text style={[styles.title,
                    ]}>Quiz 1 Lembaga Negara</Text>
                    <Text style={[styles.title2,
                    ]}>Lembaga Negara</Text>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                <View style={{ backgroundColor: '#FFFFFF', padding: 10, margin: 5, width: 65, borderRadius: 10, borderWidth: 1, borderColor: '#f4ebf0' }}>
                    <Text style={styles.fill}>5 Soal</Text>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', padding: 10, margin: 5, width: 70, borderRadius: 10, borderRadius: 10, borderWidth: 1, borderColor: '#f4ebf0' }}>
                    <Text style={styles.fill}>Mudah</Text>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', padding: 10, margin: 5, width: 85, borderRadius: 10, borderRadius: 10, borderWidth: 1, borderColor: '#f4ebf0' }}>
                    <Text style={styles.fill}>10 Menit</Text>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 5 }}>
                <Button style={{ backgroundColor: '#B835D9', width: '100%', borderRadius: 10, borderWidth: 1, borderColor: '#B835D9' }} onPress={() => navigation.navigate('QuizSoal')}>
                    Mulai Quiz</Button>
                <View style={{ marginHorizontal: 1.5 }}></View>
                {/* <Button style={{ backgroundColor: '#ada6ad', width: 140, borderRadius: 10, borderColor: '#ada6ad', }} onPress={() => navigation.navigate('ReviewScore')}>
                    Review</Button> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    title2: {
        fontSize: 14,
        color: '#A5A5A5'
    },
    fill: {
        color: '#B835D9'
    }
})
export default QuizSatu;