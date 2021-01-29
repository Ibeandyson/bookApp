import React from 'react';
import {View} from 'react-native';
import {block} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNav = () => {
    return (
        <View
            style={{
             position: "absolute" ,
                marginLeft: 20,
                marginRight: 20,
               marginTop: 630

            }}>
            <View
                style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 20,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,  
                    elevation: 5
                }}>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10,  marginBottom: 20,}}>
                    <View style={{marginLeft: 30, marginRight: 30, marginTop: 15}}>
                        <Feather name="home" color="black" size={20} />
                    </View>
                    <View style={{marginLeft: 30, marginRight: 30, marginTop: 15, opacity: 0.2}}>
                        <Feather name="bookmark" color="black" size={20} />
                    </View>
                    <View style={{marginLeft: 30, marginRight: 30, marginTop: 15,  opacity: 0.2}}>
                        <MaterialCommunityIcons name="cart-outline" color="black" size={20} />
                    </View>
                    <View style={{marginLeft: 30, marginRight: 30, marginTop: 15,  opacity: 0.2}}>
                        <Feather name="settings" color="black" size={20} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default BottomNav;
