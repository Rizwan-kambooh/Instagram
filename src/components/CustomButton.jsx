import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BUTTON, COLORS, FONTS } from '../utils/Constants'
const CustomButton = ({ title }) => {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}> {title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton;
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        height: BUTTON.height,
        width: BUTTON.width,
        borderRadius: BUTTON.borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: FONTS.regular,
        fontWeight: '600',
    }
})  