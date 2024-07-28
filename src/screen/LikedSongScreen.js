import { StyleSheet, Text, View, ScrollView, Pressable, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign"

const LikedSongScreen = () => {
    const navigation = useNavigation()
    return (
        <>
            <LinearGradient colors={["#614385", "#516396"]} style={{ flex: 1 }} >
                <ScrollView>
                    <Pressable onPress={() => navigation.goBack()}
                        style={{ marginTop: 20 }}>
                        <Ionicons name="arrow-back" size={25} color="white" />
                    </Pressable>

                    <Pressable style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginHorizontal: 10,
                        marginTop: 10
                    }}>
                        <Pressable style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            backgroundColor: "#180161",
                            width: 300,
                            height: 38,
                            borderRadius: 3,

                        }}>
                            <AntDesign name="search1" size={25} color="white" style={{
                                marginLeft: 5
                            }} />
                            <TextInput placeholder='Find in Liked Songs' placeholderTextColor={"white"} />
                        </Pressable>
                        <Pressable
                            style={{
                                backgroundColor: "#180161",
                                padding: 9,
                                borderRadius: 3,
                                height: 38
                            }}>
                            <Text style={{ color: "white" }} >Sort</Text>
                        </Pressable>
                    </Pressable>
                </ScrollView>
            </LinearGradient>
        </>
    )
}

export default LikedSongScreen

const styles = StyleSheet.create({})