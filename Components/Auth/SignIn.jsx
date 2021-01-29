import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity,ScrollView KeyboardAvoidingView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const SignIn = props => {
    const [data, setData] = useState({
        secureTextEntry: true
    });

    // =============FUNC TO HIDE AND PASSWORD FILED VALUE ===================
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };

    return (
       
            <ScrollView>
                <ImageBackground
                    imageStyle={{
                        resizeMode: 'cover'
                    }}
                    source={require('../../assets/loginimage.png')}
                    style={style.image}>
                    <View style={style.intro}>
                        <Text style={style.introText}>Adventures</Text>
                        <Text style={style.introText}>in literature.</Text>
                    </View>
                    <Text style={style.subIntro}>
                        <Text style={style.subIntroText}>Join our community</Text>
                    </Text>

                    <View style={style.form}>
                        <View style={style.inputContainer}>
                            <Text style={style.formText}>Log in</Text>
                            <View style={style.inputRap}>
                                <TextInput placeholder="Email" style={style.inputEmail} />
                            </View>
            
                            <View style={style.inputRap}>
                                <TextInput
                                    placeholder="Password"
                                    secureTextEntry={data.secureTextEntry ? true : false}
                                    style={style.inputPassword}
                                />
                                <TouchableOpacity onPress={updateSecureTextEntry}>
                                    {data.secureTextEntry ? (
                                        <Feather name="eye" color="grey" size={20} style={{marginTop: 15}} />
                                    ) : (
                                        <Feather name="eye-off" color="grey" size={20} style={{marginTop: 15}} />
                                    )}
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={style.btn}
                                onPress={() => props.navigation.navigate('BookLandingPage')}>
                                <Text style={style.btnText}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
       
    );
};

const style = StyleSheet.create({
    intro: {
        padding: 30,
        marginTop: 120
    },
    introText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    subIntro: {
        padding: 30,
        marginBottom: 50,
        marginTop: -30
    },
    subIntroText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        opacity: 0.1
    },
    form: {
        backgroundColor: 'white',
        height: '300%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    inputContainer: {
        padding: 30
    },
    formText: {
        color: 'black',
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputRap: {
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 5,
        borderWidth: 1,
        borderRadius: 15,
        height: 50,
        borderColor: '#e5e5e6',
        marginBottom: 20
    },
    inputEmail: {
        marginLeft: 20,
        width: '80%'
    },
    inputPassword: {
        width: '80%',
        marginLeft: 20
    },
    btn: {
        height: 50,
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
    },
    image: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%'
    }
});

export default SignIn;
