import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import PopularBooks from './PopularBooks';
import BookLandingHeadSection from './BookLandingHeadSection';
import axios from 'axios';

const Books = props => {
    const [books, setBooks] = useState([]);
    const [pageCounter, setPageCounter] = useState(0);
    const [currentPageCounter, setcurrentPageCounter] = useState(0);
    const [loading, setLoading] = useState(true);

    const loadData = () => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=search-terms&startIndex=50&maxResults=10&key=AIzaSyC8mxpzzSgeWduvc58rS-DNgtizjOXnebs`
            )
            .then(res => {
                setBooks(res.data.items);
                setLoading(false);
                console.log(res);
            })
            .catch(err => {
                console.log(err.response);
                if (err.response.status === 503) {
                    console.log('network error retrying...');
                    loadData();
                    setLoading(false);
                } else {
                    return [];
                }
            });
    };

   
    useEffect(() => {
        loadData();
    }, []);

    return (
        <View>
            <BookLandingHeadSection />
            <View style={style.populerBooks}>
                <Text style={style.populerBooksText}>Popular Books</Text>
            </View>
            <FlatList
            showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={books}
                initialNumToRender={10}
                keyExtractor={item => item.id}
                onEndReachedThreshold={0.5}
                renderItem={(item, index) => <PopularBooks item={item} key={item.index} {...props} />}
            />
            <View style={style.newestBooks}>
                <Text style={style.populerBooksText}>Newest</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    populerBooks: {
        padding: 20,
        marginTop: -20
    },
    populerBooksText: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    newestBooks: {
        padding: 20,  
    }
});

export default Books;
