import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reels from "../screens/Reels";
const Stack = createNativeStackNavigator();
export const Reel =()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ReelScreen" component={Reels} />
        </Stack.Navigator>
    )
}