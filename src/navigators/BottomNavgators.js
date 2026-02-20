import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { ProfileScreen } from "./Profile";
const Tab = createBottomTabNavigator();
import { HomeScreen } from "./HomeScreen";
import { SearchScreen } from "./Search";
import { Reel } from "./Reels";
export const BottomNavgators = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = "home";
                    } else if (route.name === "Reel") {
                        iconName = "video-camera";
                    } else if (route.name === "Search") {
                        iconName = "search";
                    } else if (route.name === "Profile") {
                        iconName = "user";
                    } 
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#000000",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Reel" component={Reel} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
