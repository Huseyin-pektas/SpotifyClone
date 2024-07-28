import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, LikedSongScreen, LoginScreen, ProfileScreen, SongInfoScreen } from '../screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

const Routes = () => {


    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Liked" component={LikedSongScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SongInfo" component={SongInfoScreen} />
        </Stack.Navigator>

    )
}

export default Routes

const styles = StyleSheet.create({})