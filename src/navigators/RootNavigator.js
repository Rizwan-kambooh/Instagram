import AuthNavigator from "./AuthNavigator";
import { BottomNavgators } from "./BottomNavgators";
import { useSelector } from "react-redux";
const RootNavigator = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    isLoggedIn ? <BottomNavgators /> : <AuthNavigator />
  )
}

export default RootNavigator