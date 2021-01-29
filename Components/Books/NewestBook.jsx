import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import StarRating from 'react-native-star-rating';

const NewestBook = props => {
    const [state, setstate] = useState({
        starCount: 3.5
    });
    const [imageUrl] = useState(props.item.item.volumeInfo.imageLinks.thumbnail);
    const onStarRatingPress = rating => {
        setState({
            starCount: rating
        });
    };
    console.log(props.item.item);
    return (
        <View>
            <View style={style.books}>
                <Image
                    style={style.bookImage}
                    source={{
                        uri: imageUrl
                    }}
                />
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text ellipsizeMode="clip" numberOfLines={1} style={style.bookName}>
                            {props.item.item.volumeInfo.title}
                        </Text>
                        <View style={{marginTop: 12, marginLeft: 35}}>
                            <Feather name="bookmark" color="black" size={20} />
                        </View>
                    </View>
                    <Text ellipsizeMode="clip" numberOfLines={1} style={style.author}>
                        {props.item.item.volumeInfo.authors && props.item.item.volumeInfo.authors[0]}
                    </Text>
                    <View style={{marginLeft: 20, marginTop: 30, width: 100}}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            starSize={15}
                            emptyStarColor="#ededef"
                            fullStarColor="#ffc41f"
                            rating={state.starCount}
                            selectedStar={rating => onStarRatingPress(rating)}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    populerBooks: {
        padding: 20
    },
    populerBooksText: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    books: {
        flexDirection: 'row',
        marginTop: 20
    },
    bookImage: {
        height: 130,
        width: 90,
        marginLeft: 20,
        borderRadius: 10
    },
    bookName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
        width: 150
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

export default NewestBook;
