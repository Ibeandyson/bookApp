import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

const PopularBooks = (props) => {
    const [imageUrl] = useState(props.item.item.volumeInfo.imageLinks.thumbnail);
    return (
        <View>
            <View style={style.pbooks}>
                <View style={{flexDirection: 'column'}}>
                    <Image
                        style={style.bookImage}
                        style={style.bookImage}
                        source={{
                            uri: imageUrl
                        }}
                    />
                    <Text ellipsizeMode="clip" numberOfLines={1}  style={style.bookName}>{props.item.item.volumeInfo.title}</Text>
                    <Text ellipsizeMode="clip" numberOfLines={1}  style={style.author}> {props.item.item.volumeInfo.authors && props.item.item.volumeInfo.authors[0]}</Text>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    pbooks: {
        flexDirection: 'row',
        marginTop: 5
    },
    bookImage: {
        height: 200,
        width: 130,
        marginLeft: 20,
        borderRadius: 10
    },
    bookName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        width: 120
    },
    author: {
        marginLeft: 20,
        opacity: 0.4,
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5
    }
});

export default PopularBooks;
