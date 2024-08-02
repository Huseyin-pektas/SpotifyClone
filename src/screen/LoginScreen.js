import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation()
    return (
        <LinearGradient
            colors={["#040306", "#131624"]} style={{ flex: 1 }}>
            <SafeAreaView>

                <View style={{ color: "white", height: 60 }} />
                <Entypo name='spotify' color="green" size={80} style={styles.icon} />
                <Text style={styles.TextHeader}>Millions of songs.{"\n"}Free on Spotify</Text>

                <View style={{ color: "white", height: 60 }} />

                <Pressable onPress={() => navigation.navigate("Home")}
                    style={styles.LoginButton}>
                    <Text style={styles.LoginText}>Sign In with Spotify</Text>
                </Pressable>
                <Pressable style={styles.LoginButtonPhone}>
                    <MaterialIcons name='phone-android' color="white" size={25} />
                    <Text style={styles.LoginText1}>Continue with Phone Number</Text>
                </Pressable>
                <Pressable style={styles.LoginButtonPhone}>
                    <AntDesign name="google" color="white" size={25} />
                    <Text style={styles.LoginText1}>Continue with Google</Text>
                </Pressable>
                <Pressable style={styles.LoginButtonPhone}>
                    <AntDesign name="facebook-square" color="white" size={25} />
                    <Text style={styles.LoginText1}>Continue with Phone Number</Text>
                </Pressable>


            </SafeAreaView>
        </LinearGradient>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    icon: {
        textAlign: "center"
    },
    TextHeader: {
        color: "white",
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 40
    },
    LoginButton: {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "green",
        padding: 10,
        width: 300,
        borderRadius: 25,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    LoginText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,

    },
    LoginText1: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        flex: 1
    },
    LoginButtonPhone: {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#131625",
        padding: 10,
        width: 300,
        borderRadius: 25,
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 0.7,
        borderColor: "#c0c0c0"
    }
})