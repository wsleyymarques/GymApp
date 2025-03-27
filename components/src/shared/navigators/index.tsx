import { View, ActivityIndicator } from "react-native";
import PrivateRoutes from "@/components/src/shared/navigators/PrivateRoutes";
import PublicRoutes from "@/components/src/shared/navigators/PublicRoutes";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/components/src/shared/store";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {loadAuth} from "@/components/src/shared/store/authSlice";

const Navigators = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = await AsyncStorage.getItem("authToken");
            dispatch(loadAuth(token));
            setLoading(false);
        };
        checkAuth();
    }, [dispatch]);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#520093" />
            </View>
        );
    }

    return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Navigators;
