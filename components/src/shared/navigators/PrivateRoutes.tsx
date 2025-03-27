import { createStackNavigator } from "@react-navigation/stack";
import Home from "@/components/src/container/home/index";

const Stack = createStackNavigator();

const PrivateRoutes = () => {
    return (
        <Stack.Navigator id={undefined} initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default PrivateRoutes;
