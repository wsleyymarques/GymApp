import React, { useState } from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import Login from "@/components/src/container/auth/login"
import Register from "@/components/src/container/auth/register"

const Welcome = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <ImageBackground
            source={require("../../../../assets/gymLogin.jpg")}
            style={{ flex: 1, justifyContent: "center", padding: 20 }}
            resizeMode="cover"
        >
            <View style={{ flex: 1, justifyContent: "center" }}>

                {isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />}


            </View>
        </ImageBackground>
    );
};

export default Welcome;
