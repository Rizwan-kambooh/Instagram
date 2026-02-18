import { View, TextInput, StyleSheet } from 'react-native'
const CustomInput = ({ placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.input} 
            placeholder={placeholder} 
            secureTextEntry={secureTextEntry}
        />  
    </View>
  )
}

export default CustomInput
const styles = StyleSheet.create({
    container: {
        
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#FAFAFA',
        height:44,
        width: 343,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }
})