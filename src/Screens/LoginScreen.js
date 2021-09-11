import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    ScrollView,
    SafeAreaView,
    Dimensions

} from 'react-native';

export default class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',

        }

        this.RightUsername = "Nilesh",
            this.RightPass = "1"
    }

    onClickListener = () => {
        const { username, password } = this.state;

        if (username == this.RightUsername && password == this.RightPass) {
            // Alert.alert("Alert", "Button pressed ");

            this.props.navigation.navigate("DashBoard", { username, password })


        }
        else {
            Alert.alert("Alert", "Wrong Username or Passs ");


        }
    }

    render() {
        return (
            <SafeAreaView >
                <ScrollView >
                    <View style={styles.container} >
                        <Image
                            source={require("../../Images/logo.png")}
                            resizeMode="contain"
                            style={{ width: 150, height: 150 }}
                        />
                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                placeholder="Username"
                                placeholderTextColor="#000000"


                                onChangeText={(username) => this.setState({ username })} />
                        </View>

                        <View style={styles.inputContainer}>

                            <TextInput style={styles.inputs}
                                placeholder="Password"
                                placeholderTextColor="#000000"
                                secureTextEntry={true}
                                underlineColorAndroid='transparent'
                                onChangeText={(password) => this.setState({ password })} />
                        </View>

                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener()}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableHighlight>


                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
        // height: Dimensions.get('window').height
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: Dimensions.get("screen").height

    },
    inputContainer: {

        backgroundColor: '#FFFFFF',
        borderRadius: 30,

        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#000000"
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        // borderBottomColor: '#FFFFFF',
        flex: 1,
        color: "#000000",
        borderColor: "#000000"

    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#EF0D33",
    },
    loginText: {
        color: "#FFFFFF",
    }
});
