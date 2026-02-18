import { View, Text, Image , StyleSheet} from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import { Icons } from '../assests/icons';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { COLORS } from '../utils/Constants';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const navigation = useNavigation();
    return (
            <Screen>
                <View style={styles.container}>
                    <View>
                        <Image source={Icons.logo} width={Icons.width} height={Icons.height}/>
                    </View>
                    <View style={{gap:10}}>
                        <CustomInput placeholder={'Username or Email'} secureTextEntry={false} showIcon={false}/>
                        <CustomInput placeholder={'Password'} secureTextEntry={true}/>
                        <Text style={{textAlign:'right', color: COLORS.primary}}>Forgot Password?</Text>
                    </View>
                    <View>
                        <CustomButton title={'Login'}/>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
                        <Image source={Icons.facebook} width={Icons.width} height={Icons.height}/>
                        <Text style={{color: COLORS.primary, fontWeight: '600'}}>Login with Facebook</Text>
                    </View>
                    <View style={{ marginHorizontal:20,flexDirection:'row', alignItems:'center', gap:10}}>
                        <View style={{height:1, width:'45%', backgroundColor: COLORS.lightGray}}/>
                        <Text style={{color: COLORS.gray, fontWeight: '600'}}>OR</Text>
                        <View style={{height:1, width:'45%', backgroundColor: COLORS.lightGray}}/>
                    </View>
                    <View>
                        <Text style={{color: COLORS.gray}}>Don't have an account? <Text style={{color: COLORS.primary, fontWeight: '600'}} onPress={()=>navigation.navigate('Signup')}>Sign Up</Text></Text>
                    </View>
                </View>
            </Screen>
    )
}

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap:30,
        paddingHorizontal: 20,
    }
})