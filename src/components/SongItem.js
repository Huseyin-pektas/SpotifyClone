import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SongItem = () => {
    return (
        <Pressable>
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-Vr9_Y-k7jrz75efUDBtYZ_slGmZsOb4Pw&s" }} style={{
                width: 100,
                height: 100
            }} />
        </Pressable>
    )
}

export default SongItem

const styles = StyleSheet.create({})