import { createStackNavigator } from "@react-navigation/stack";
import Login from "@/components/src/container/auth/login";
import Register from "@/components/src/container/auth/register";
import welcome from "@/components/src/container/welcome";
import Welcome from "@/components/src/container/welcome";

const Stack = createStackNavigator();

const PublicRoutes = () => {
    return (
        <Stack.Navigator id={undefined} initialRouteName="Welcome">
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
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default PublicRoutes;
