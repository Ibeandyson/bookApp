import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import Books from './Books';
import NewestBook from './NewestBook';
import BottomNav from "../Navigation/BottomNav"
import axios from 'axios';

const BookLandingPage = props => {
    const [books, setBooks] = useState([]);
    const [pageCounter, setPageCounter] = useState(0);
    const [currentPageCounter, setcurrentPageCounter] = useState(0);
    const [loading, setLoading] = useState(true)

    const loadData = () => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyC8mxpzzSgeWduvc58rS-DNgtizjOXnebs`
            )
            .then(res => {
                setBooks(res.data.items);
                setLoading(false);
                console.log(res);
            })
            .catch(err =>{
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

    const nextData = async () => {
        console.log(pageCounter);
        setPageCounter(pageCounter + 1);
        console.log(pageCounter);
        setLoading(true);
        const newBooks = await axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=search-terms&startIndex=${pageCounter *
                    10}&maxResults=10&key=AIzaSyC8mxpzzSgeWduvc58rS-DNgtizjOXnebs`
            )
            .then(res => {
                return res.data.items;
              
            })
            .catch(err => {
                // console.log(err);
                console.log(err.response.status);
                if (err.response.status === 503) {
                    console.log('network error retrying...');
                    setPageCounter(currentPageCounter);
                    nextData();
                    setLoading(false);
                } else {
                    return [];
                }
            });
        console.log('B4: ', Object.keys(books).length);
        if (Array.isArray(newBooks) && Object.keys(books).length > 0) {
            setLoading(false);
            setBooks(books.concat(...newBooks));
            console.log('AF: ', Object.keys(books).length);
            setcurrentPageCounter(pageCounter+1)
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const _renderFooter = () => {
        if (!loading && books.length < 1 )
            return (
                <View
                    style={{
                        height: 200
                    }}>
                    <Text style={{textAlign: 'center', color: 'gray'}}>No available ad for this country</Text>
                </View>
            );
        if (!loading)
            return (
                <View
                    style={{
                        height: 100
                    }}
                />
            );

        return (
            <View
                style={{
                    height: 100,
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                <ActivityIndicator color="black" animating size="large" />
            </View>
        );
    };

    return (
        <View style={{backgroundColor: '#fdfdfd', height: '100%'}}>
            <FlatList
                data={books}
                onEndReached={nextData}
                initialNumToRender={10}
                keyExtractor={item => item.id}
                onEndReachedThreshold={0.5}
                ListHeaderComponent={<Books {...props} />}
                renderItem={(item, index) => <NewestBook item={item} key={item.index} {...props} />}
                ListFooterComponent={_renderFooter }
            />
            <BottomNav/>
        </View>
    );
};

const style = StyleSheet.create({});

export default BookLandingPage;
