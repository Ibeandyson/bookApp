import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const PopularBooks = props => {
    const [imageUrl] = useState(props.item.item.volumeInfo.imageLinks.thumbnail);
    return (
        <View>
            <View style={style.pbooks}>
                <View style={{flexDirection: 'column'}}>
                    <View
                        style={{
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 1},
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 5
                        }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('BookInfo',  {item: props.item.item})}>
                            <Image
                                style={style.bookImage}
                                source={{
                                    uri: imageUrl
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text ellipsizeMode="clip" numberOfLines={1} style={style.bookName}>
                        {props.item.item.volumeInfo.title}
                    </Text>
                    <Text ellipsizeMode="clip" numberOfLines={1} style={style.author}>
                        {' '}
                        {props.item.item.volumeInfo.authors && props.item.item.volumeInfo.authors[0]}
                    </Text>
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
        height: 170,
        width: 110,
        marginLeft: 20,
        borderRadius: 10
    },
    bookName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        width: 100,
        marginTop: 10
    },
    author: {
        marginLeft: 20,
        opacity: 0.4,
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5,
        width: 100
    }
});

export default PopularBooks;
