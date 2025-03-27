import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import App from "@/app/index";
import { store } from "@/components/src/shared/store";
import '../global.css'


export default function RootLayout() {

    return (
        <Provider store={store}>
                <App />
        </Provider>
    );
}
