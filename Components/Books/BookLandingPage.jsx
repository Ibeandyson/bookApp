import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

const BookLandingPage = () => {
    return (
        <View>
            <View style={style.headSection}>
             
                <Image  style={style.avater} source={require('../../assets/avater.jpg')} />
                
                <View style={style.nameRap}>
                <Text style={style.name}>Hi, Andy!</Text>
                </View>
               <View style={style.search}>
               <Feather name="search" color="black" size={30} />
               </View>
            </View>
            <View style={style.populerBooks}>
                <Text style={style.populerBooksText}>Popular Books</Text>
            </View>
            <ScrollView  horizontal={true}>
                    <View style={style.pbooks}>
                    <Image  style={style.bookImage} source={require('../../assets/avater.jpg')} />
                    </View>
                    <Text>kings of kings</Text>
                </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({
    headSection: {
        flexDirection: 'row',
        padding: 20,
        marginTop: 20
    },
    avater:{
        height: 45,
        width: 45,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
    },
    nameRap:{
        marginLeft: 10,
        marginTop: 10
    },
    name:{
        fontSize: 16,
        fontWeight: "bold"
    },
    search: {
        marginLeft: "53%",
        margin: 10
    },
    populerBooks: {
       padding: 20,
    },
    populerBooksText: {
        fontSize: 25,
        fontWeight: "bold"
     },
     pbooks:{
       flexDirection: "row",
       marginTop: 20
     },
     bookImage: {
         height: 200,
         width: 130,
         marginLeft: 20,
         shadowColor: 'gray',
         shadowOffset: { width: 6, height: 7 },
         shadowOpacity: 0.9,
     }
});

export default BookLandingPage;
