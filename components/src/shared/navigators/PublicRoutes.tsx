import { createStackNavigator } from "@react-navigation/stack";
import Login from "@/components/src/container/auth/login";
import Register from "@/components/src/container/auth/register";

const Stack = createStackNavigator();

const PublicRoutes = () => {
    return (
        <Stack.Navigator id={undefined} initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default PublicRoutes;
