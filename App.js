import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import MainNavigator from "./src/navigation/MainNavigator";
import { Provider } from "react-redux";
import store from '../Desarrollo de app/src/store/index'

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}