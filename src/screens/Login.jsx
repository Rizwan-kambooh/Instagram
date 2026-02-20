import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import { Icons } from '../assests/icons';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { COLORS } from '../utils/Constants';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../validation/loginSchema';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/slices/authSlice';
const Login = () => {
    const dispatch = useDispatch();
    const user = {
        username: 'rizwan',
        email: 'rizwan@gmail.com',
        password: '123456',
    }
    const { control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const navigation = useNavigation();
    const handleLogin = async (data) => {
        console.log('Login button pressed with data:', data.email);
        if (data.email === user.email && data.password === user.password) {
            dispatch(loginSuccess(user));
        } else {
            alert('Invalid email or password');
        }
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
                        name="email"
                        render={({ field: { onChange, value, onBlur } }) => (
                            <CustomInput placeholder={'Username or Email'} secureTextEntry={false} showIcon={false} value={value} onChange={onChange} onBlur={onBlur} />
                        )}
                    />
                    {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value, onBlur } }) => (
                            <CustomInput placeholder={'Password'} showIcon={true} secureTextEntry={true} value={value} onChange={onChange} onBlur={onBlur} />
                        )}
                    />
                    {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
                    <Text style={{ textAlign: 'right', color: COLORS.primary }}>Forgot Password?</Text>
                </View>
                <View>
                    <CustomButton title={'Login'} onPress={handleSubmit(handleLogin)} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Image source={Icons.facebook} width={Icons.width} height={Icons.height} />
                    <Text style={{ color: COLORS.primary, fontWeight: '600' }}>Login with Facebook</Text>
                </View>
                <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <View style={{ height: 1, width: '45%', backgroundColor: COLORS.lightGray }} />
                    <Text style={{ color: COLORS.gray, fontWeight: '600' }}>OR</Text>
                    <View style={{ height: 1, width: '45%', backgroundColor: COLORS.lightGray }} />
                </View>
                <View>
                    <Text style={{ color: COLORS.gray }}>Don't have an account? <Text style={{ color: COLORS.primary, fontWeight: '600' }} onPress={() => navigation.navigate('Signup')}>Sign Up</Text></Text>
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
        gap: 30,
        paddingHorizontal: 20,
    }
})