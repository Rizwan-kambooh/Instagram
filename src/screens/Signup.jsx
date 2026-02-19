import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import { Icons } from '../assests/icons';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { COLORS } from '../utils/Constants';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../validation/signupSchema';
const Signup = () => {
    const navigation = useNavigation();
    const { control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });
    const handleSignup = (data) => {
        console.log('Signup button pressed with data:', data.email);
    }
    return (
        <Screen>
            <View style={styles.container}>
                <View>
                    <Image source={Icons.logo} width={Icons.width} height={Icons.height} />
                </View>
                <View style={{ gap: 10 }}>
                    <Controller
                        control={control}
                        name="username"
                        render={({ field: { onChange, value, onBlur} }) => (
                            <CustomInput placeholder={'Username'} secureTextEntry={false} showIcon={false} value={value} onChange={onChange} onBlur={onBlur} />
                        )}
                    />
                    {errors.username && <Text style={{ color: 'red' }}>{errors.username.message}</Text>}
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value, onBlur} }) => (
                            <CustomInput placeholder={'Email'} secureTextEntry={false} showIcon={false} value={value} onChange={onChange} onBlur={onBlur} />
                        )}
                    />
                    {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value, onBlur} }) => (
                            <CustomInput placeholder={'Password'} secureTextEntry={true} showIcon={true} value={value} onChange={onChange} onBlur={onBlur} />
                        )}
                    />
                    {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
                    <Controller
                        control={control}
                        name="confirmPassword"
                        render={({ field: { onChange, value, onBlur } }) => (
                            <CustomInput placeholder={'Confirm Password'} secureTextEntry={true} showIcon={true} value={value} onChange={onChange} onBlur={onBlur} />
                        )}
                    />
                    {errors.confirmPassword && <Text style={{ color: 'red' }}>{errors.confirmPassword.message}</Text>}
                </View>
                <View>
                    <CustomButton title={'Create New Account'} onPress={handleSubmit(handleSignup)}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Image source={Icons.facebook} width={Icons.width} height={Icons.height} />
                    <Text style={{ color: COLORS.primary, fontWeight: '600' }}>Signup with Facebook</Text>
                </View>
                <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <View style={{ height: 1, width: '45%', backgroundColor: COLORS.lightGray }} />
                    <Text style={{ color: COLORS.gray, fontWeight: '600' }}>OR</Text>
                    <View style={{ height: 1, width: '45%', backgroundColor: COLORS.lightGray }} />
                </View>
                <View>
                    <Text style={{ color: COLORS.gray }}>Already have an account?<Text style={{ color: COLORS.primary, fontWeight: '600' }} onPress={() => navigation.navigate('Login')}>Login</Text></Text>
                </View>
            </View>
        </Screen>
    )
}

export default Signup;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        paddingHorizontal: 20,
    }
})