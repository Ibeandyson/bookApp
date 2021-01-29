import React, {useState} from 'react';
import {View, Text, StyleSheet,ScrollView, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';


const BookInfo = props => {
    const [state, setstate] = useState({
        starCount: 4.5
    });
    const [imageUrl] = useState(props.route.params.item.volumeInfo.imageLinks.thumbnail);

    return (
        <View style={{backgroundColor: '#ffffff', height: '100%'}}>
            <ScrollView>
                <View style={style.headSection}>
                    <View style={style.back}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('BookLandingPage')}>
                            <MaterialIcons  name="keyboard-arrow-left" color="black" size={50} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.bookmark}>
                        <Feather name="bookmark" color="black" size={30} />
                    </View>
                    <View style={style.ellipsis}>
                        <Ionicons name="md-ellipsis-vertical" color="black" size={30} />
                    </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        style={style.image}
                        source={{
                            uri: imageUrl
                        }}
                    />
                    <View style={{marginTop: 15}}>
                        <Text style={style.bookname}>{props.route.params.item.volumeInfo.title}</Text>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={style.author}>{props.route.params.item.volumeInfo.authors[0]}</Text>
                    </View>
                    <View style={{marginTop: 15, flexDirection: 'row'}}>
                        <View style={{width: 100}}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                starSize={17}
                                emptyStarColor="#ededef"
                                fullStarColor="#ffc41f"
                                rating={state.starCount}
                                selectedStar={rating => onStarRatingPress(rating)}
                            />
                        </View>
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10}}>4.5 /</Text>
                        <Text style={{opacity: 0.4, marginLeft: 5}}>5.0</Text>
                    </View>
                </View>
                <View style={{marginTop: -15, padding: 30, justifyContent: 'center', alignItems: 'center'}}>
                    <Text
                        style={{
                            opacity: 0.3,
                            fontWeight: 'bold',
                            fontSize: 16,
                            textAlign: 'justify'
                        }}>
                        {props.route.params.item.volumeInfo.description}
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: -40,
                        padding: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                    <View
                        style={{
                            marginRight: 20,
                            backgroundColor: '#ffffff',
                            borderRadius: 10,
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 1},
                            shadowOpacity: 0.3,
                            shadowRadius: 100,
                            elevation: 8
                        }}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 20}}>
                            <View style={{marginLeft: 10, marginRight: 10, marginBottom: -10, marginTop: 1}}>
                                <Feather name="menu" color="black" size={20} />
                            </View>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 1,
                                    marginBottom: -10,
                                    fontSize: 15,
                                    fontWeight: 'bold'
                                }}>
                                Preview
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            marginLeft: 20,
                            backgroundColor: '#ffffff',
                            borderRadius: 10,
                            shadowColor: '#000',
                            shadowOffset: {width: 0, height: 1},
                            shadowOpacity: 0.3,
                            shadowRadius: 100,
                            elevation: 8
                        }}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 20}}>
                            <View style={{marginLeft: 10, marginRight: 10, marginBottom: -10, marginTop: 1}}>
                                <AntDesign name="message1" color="black" size={20} />
                            </View>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 1,
                                    marginBottom: -10,
                                    fontSize: 15,
                                    fontWeight: 'bold'
                                }}>
                                Review
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: -40,
                        padding: 30
                    }}>
                    <TouchableOpacity style={style.btn}>
                        <Text style={style.btnText}>Buy Now for $33.99</Text>
                    </TouchableOpacity>
                </View>
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
    bookmark: {
        marginLeft: '59%',
        margin: 10
    },
    ellipsis: {
        marginLeft: '5%',
        margin: 10
    },
    image: {
        height: 300,
        width: 200,

        borderRadius: 10
    },
    bookname: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20
    },
    author: {
        opacity: 0.4,
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: -25,
        padding: 20
    },
    btn: {
        height: 70,
        backgroundColor: 'black',
        borderRadius: 15,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
export default BookInfo;
