import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import Title from '../components/Title';
import Constants from 'expo-constants';

const DetailMateriScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ margin: 30, padding: 40 }}>
                    <Text style={styles.text1}>Mahkamah Agung</Text>
                </View>
                <View>
                    <Image source={require('../assets/back.png')} style={{ top: -185, margin: 90, left: -60 }} />
                </View>
                <View>
                    <Image source={require('../assets/more.png')} style={{ top: -295, left: 330 }} />
                </View>
                <View>
                    <Text style={styles.text2}>Lembaga Negara Indonesia</Text>
                </View>
                <View>
                    <Text style={styles.text3}>          Lembaga Mahkamah Agung atau (MA) menjadi pemegang kekuasaan kehakiman tertinggi dari semua lingkungan peradilan. Lembaga MA diketuai oleh Hakim Agung yang dibantu oleh beberapa hakim lainnya.
                        Hakim Agung ini diusulkan oleh DPR yang berasal dari usulan Komisi Yudisial. Lembaga MA mempunyai kewajiban dan kewenangan sendiri, yakni:
                        1. Mengadili pada tingkat kasasi, menguji peraturan perundang-undangan, dan wewenang lainnya yang diberikan oleh Undang-Undang
                        2. Mengajukan tiga orang anggota hakim konstitusi
                        Memberikan pertimbangan grasi dan rehabilitasi yang diajukan oleh Presiden</Text>
                </View>
            </ScrollView>
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    text1: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    text2: {
        textAlign: 'center',
        fontSize: 13,
        color: '#A5A5A5',
        top: -295
    },
    text3: {
        textAlign: 'justify',
        padding: 15,
        top: -250,
        color: '#A5A5A5',
        fontSize: 13
    }
});

export default DetailMateriScreen;