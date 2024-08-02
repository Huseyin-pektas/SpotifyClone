import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <LinearGradient
            colors={["#040306", "#131624"]}
            style={{
                flex: 1
            }}>
            <ScrollView style={{
                marginTop: 20,



            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <View style={{
                        padding: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",

                    }}>
                        <Image source={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwzeErFyzVyqbuJlenBHdj3W4Uf4L3mmyAVg&s"
                        }}
                            style={{
                                width: 50, height: 50,
                                borderRadius: 25
                            }}
                        />
                        <Text style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "bold",
                            marginLeft: 10
                        }}>
                            Message
                        </Text>
                    </View>
                    <MaterialCommunityIcons name="lightning-bolt-outline" size={25} color="white" />
                </View>
                <View style={{
                    gap: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10
                }}>
                    <Pressable style={{
                        backgroundColor: "#1E1E1E",
                        padding: 10,
                        borderRadius: 20
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: "white"
                        }}>
                            Music
                        </Text>
                    </Pressable>
                    <Pressable style={{
                        backgroundColor: "#1E1E1E",
                        padding: 10,
                        borderRadius: 20
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: "white"
                        }}>
                            Podcast & Shows
                        </Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable
                        onPress={() => navigation.navigate("Liked")}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            flex: 1,
                            margin: 10,
                            backgroundColor: "#202020",
                            borderRadius: 5
                        }}>
                        <LinearGradient
                            style={{
                                borderTopLeftRadius: 5,
                                borderBottomLeftRadius: 5
                            }}
                            colors={["#33006f", "#ffff"]}>

                            <Pressable style={{
                                width: 55,
                                height: 55,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <AntDesign name="heart" color="white" size={25} />
                            </Pressable>
                        </LinearGradient>
                        <Text style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>
                            Like Songs
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>

        </LinearGradient>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})