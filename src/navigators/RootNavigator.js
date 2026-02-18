import AuthNavigator from "./AuthNavigator";
const RootNavigator = () => {
    const isLoggedIn = false;
  return (
    isLoggedIn ? <HomeNavigator /> : <AuthNavigator />
  )
}

export default RootNavigator