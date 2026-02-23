import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { Icons } from '../assests/icons';
const Appbar = () => {
  return (
    <View style={styles.container}>
        <View><Icon name="plus" size={30} color="#000" /></View>
        <View>
            <Image source={Icons.logo2}/>
        </View>
        <View style={styles.icons}>
            <Icon name="heart" size={20} color="#000" />
        </View>
    </View>
  )
}

export default Appbar
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
})