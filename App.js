import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import MainNavigator from "./src/navigation/MainNavigator";
import { Provider } from "react-redux";
import store from "../Desarrollo de app/src/store/index";
import { init, fetchSession } from "./src/db"; 
import { setUser, setProfileImage } from "./src/features/auth/authSlice";

const App = () => {
  const [fontsLoaded] = useFonts(fonts);

  useEffect(() => {
    async function initializeApp() {
      try {
        await init(); 

        const sessionData = await fetchSession(); 

        if (sessionData) {
          store.dispatch(setUser({ email: sessionData.email, localId: sessionData.localId }));
          store.dispatch(setProfileImage(sessionData.profileImages));
        }
      } catch (error) {
      }
    }

    initializeApp();
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default App;
