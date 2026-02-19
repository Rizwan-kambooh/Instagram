import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BUTTON, COLORS, FONTS } from '../utils/Constants'
const CustomButton = ({ title , onPress}) => {
    return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.text}> {title}</Text>
            </TouchableOpacity>
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