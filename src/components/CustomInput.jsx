import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../utils/Constants';
const CustomInput = ({ placeholder, secureTextEntry = true, showIcon = true }) => {
    const [isSecure, setIsSecure] = useState(secureTextEntry);
    const toggleSecureEntry = () => {
        setIsSecure(!isSecure);
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={isSecure}
            />
            {showIcon && <Icon name={isSecure ? "eye-slash" : "eye"} size={20} color={COLORS.gray} style={{ position: 'absolute', right: 10, top: 12 }} onPress={toggleSecureEntry} />}
        </View>
    )
}

export default CustomInput
const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#FAFAFA',
        height: 44,
        width: 343,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }
})