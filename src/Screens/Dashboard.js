import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'

const Dashboard = ({ props, navigation, route }) => {

    const { username } = route.params;
    return (
        <SafeAreaView >
            <ScrollView >
                <View style={styles.container} >
                    <Image
                        source={require("../../Images/logo.png")}
                        resizeMode="contain"
                        style={{ width: 150, height: 150 }}
                    />

                    <Text style={styles.welcome}>

                        Welcome
                    </Text>
                    <Text style={styles.username}>

                        {username}
                    </Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: Dimensions.get("screen").height

    },
    welcome: {
        // fontStyle: "italic",
        color: "#EF0D33",
        fontSize: 24,
        fontFamily: "Montserrat-Regular"

    },

    username: {
        // fontStyle: "italic",
        color: "#EF0D33",
        fontSize: 20,
        fontFamily: "Montserrat-Italic"
    }
})
