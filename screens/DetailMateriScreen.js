import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView, Image, Alert, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import Title from '../components/Title';
import Constants from 'expo-constants';

const DetailMateriScreen = ({ navigation, route }) => {
    console.log(navigation)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ margin: 30, padding: 40 }}>
                    <Text style={styles.text1}>{route.params.headerText}</Text>
                </View>

                <View>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/back.png')} style={{ top: -185, margin: 90, left: -60 }} />
                    </Pressable>
                </View>
                <View>
                    <Image source={require('../assets/more.png')} style={{ top: -295, left: 330 }} />
                </View>
                <View>
                    <Text style={styles.text2}>Lembaga Negara Indonesia</Text>
                </View>
                <View>
                    <Text style={styles.text3}>{route.params.body}</Text>
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