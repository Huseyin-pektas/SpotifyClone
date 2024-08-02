import { StyleSheet, Text, View, ScrollView, Pressable, TextInput, ActivityIndicator, FlatList, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Entypo from "react-native-vector-icons/Entypo"
import SongItem from '../components/SongItem'
import { ModalContent } from "react-native-modals"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"

const LikedSongScreen = () => {

    const navigation = useNavigation()
    const [setsearchTracks, setSetsearchTracks] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const [ModalVisible, setModalVisible] = useState(false)
    //console.log(ModalVisible, "TERSİ YAPIYOR MU");

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
                    <View style={{ height: 50, }} />
                    <View style={{
                        marginHorizontal: 10
                    }}>
                        <Text style={{
                            fontSize: 18, color: "white", fontWeight: "bold"
                        }}>SELAM</Text>
                        <Text style={{
                            color: "white", marginTop: 5, fontSize: 13
                        }}>430 songs</Text>
                    </View>
                    <Pressable style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginHorizontal: 15
                    }}>
                        <Pressable style={{
                            backgroundColor: "green",
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <AntDesign name="arrowdown" size={20} color="white" />
                        </Pressable>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 10
                        }}>
                            <MaterialCommunityIcons name="cross-bolnisi" color="green" size={24} />
                            <Pressable style={{
                                backgroundColor: "green",
                                borderRadius: 30,
                                width: 60,
                                height: 60, justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Entypo name="controller-play" size={24} color="white" />
                            </Pressable>
                        </View>
                    </Pressable>
                    {/* {
                        setsearchTracks.length === 0 ? <ActivityIndicator size="large" color="#00ff00" /> : <FlatList
                            data={setsearchTracks}
                            renderItem={({ item }) => <SongItem />}
                        />
                    } */}
                </ScrollView>
            </LinearGradient>

            <Pressable
                onPress={() => setModalVisible(!ModalVisible)}
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: 10,
                    position: "absolute",
                    left: 20,
                    bottom: 10,
                    marginBottom: 20,
                    backgroundColor: "gray",
                    borderRadius: 5,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10

                }}>
                <View style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center"
                }}>
                    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-Vr9_Y-k7jrz75efUDBtYZ_slGmZsOb4Pw&s" }} style={{
                        width: 50,
                        height: 50,
                        borderRadius: 5
                    }} />
                    <Text style={{
                        color: "white",
                        width: 200
                    }}>
                        sanatçı adı
                    </Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: 60,
                    gap: 10
                }}>
                    <AntDesign name="heart" size={25} color="green" />
                    <Pressable>
                        <AntDesign name="pausecircle" size={25} color="white" />
                    </Pressable>

                </View>
            </Pressable>

            {/* <ModalContent style={{
                backgroundColor: "lightblue",
                width: "100%",
                height: "100%"
            }}>
                <View style={{
                    marginTop: 40
                }}>
                    <Pressable style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <AntDesign name="down" size={25} color="white" />
                        <Text style={{
                            fontSize: 15,
                            color: "white",
                            fontWeight: "bold"
                        }}>song Nmae</Text>
                        <Entypo name="dots-three-vertical" size={25} color="white" />
                    </Pressable>
                    <View style={{
                        padding: 10,
                        marginTop: 20
                    }}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-Vr9_Y-k7jrz75efUDBtYZ_slGmZsOb4Pw&s" }} style={{
                            width: "100%",
                            height: 350,
                            borderRadius: 4,
                            marginTop: 10
                        }} />
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: 20
                        }}>
                            <View>
                                <Text style={{
                                    fontSize: 15,
                                    color: "white",
                                    fontWeight: "bold"
                                }}>NAME</Text>
                                <Text style={{
                                    marginTop: 5,
                                    color: "gray"
                                }}>NAME</Text>
                            </View>
                            <AntDesign name="heart" size={24} color="green" />
                        </View>
                        <View style={{
                            marginTop: 10
                        }}>
                            <View style={{
                                width: "100%",
                                backgroundColor: "gray",
                                height: 4,
                                borderRadius: 5,
                                marginTop: 10
                            }}>
                                <View style={[styles.prograssbar, { width: 1 * 100 }]} />
                                <View style={{
                                    position: "absolute",
                                    width: 10,
                                    height: 10,
                                    backgroundColor: "white",
                                    left: 100,
                                    borderRadius: 5,
                                    top: -4
                                }} />
                            </View>

                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: 10,
                                alignItems: "center"
                            }}>
                                <Text style={{
                                    color: "white",
                                    fontSize: 16
                                }} >00:00</Text>
                                <Text style={{
                                    color: "white",
                                    fontSize: 16
                                }} >00:00</Text>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>
                                <Pressable>
                                    <FontAwesome name="arrows" size={30} color="green" />
                                </Pressable>
                                <Pressable>
                                    <Ionicons name="play-skip-back" color="green" size={30} />
                                </Pressable>
                                <Pressable>
                                    {
                                        isPlaying ?
                                            <AntDesign name="pausecircle" color="green" size={40} /> :
                                            <Pressable style={{
                                                backgroundColor: "white",
                                                width: 50,
                                                height: 50,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: 25
                                            }}>
                                                <Entypo name="controller-play" color="green" size={30} />
                                            </Pressable>
                                    }

                                </Pressable>
                                <Pressable>
                                    <Ionicons name="play-skip-forward" size={30} color="green" />
                                </Pressable>
                                <Pressable>
                                    <Feather name="repeat" size={30} color="green" />
                                </Pressable>

                            </View>
                        </View>
                    </View>
                </View>
            </ModalContent> */}
        </>
    )
}

export default LikedSongScreen

const styles = StyleSheet.create({
    prograssbar: {
        height: "100%",
        backgroundColor: "white"
    }
})