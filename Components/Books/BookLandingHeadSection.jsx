import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';



const BookLandingHeadSection = () => {
    return (
        <View>
            <View style={style.headSection}>
                <Image style={style.avater} source={require('../../assets/avater.jpg')} />
                <View style={style.nameRap}>
                    <Text style={style.name}>Hi, Andy!</Text>
                </View>
                <View style={style.search}>
                    <Feather name="search" color="black" size={30} />
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    headSection: {
        flexDirection: 'row',
        padding: 20,
        marginTop: 40
    },
    avater: {
        height: 45,
        width: 45,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8
    },
    nameRap: {
        marginLeft: 10,
        marginTop: 10
    },
    name: {
        fontSize: 16,
        fontWeight: "bold"
    },
    search: {
        marginLeft: '53%',
        margin: 10
    },
});

export default BookLandingHeadSection;
