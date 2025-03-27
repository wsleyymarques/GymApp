import React from "react";
import { View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Login from "@/components/src/container/auth/login"; // Altere o caminho conforme necessário

const Welcome = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require("../../../../assets/gymLogin.jpg")}
            style={{ flex: 1, justifyContent: "center", padding: 20 }}
            resizeMode="cover"
        >
            <View style={{ flex: 1, justifyContent: "center" }}>
                {/* Aqui você renderiza a tela de login ou registro */}
                {/* Por exemplo, você pode utilizar a navegação para controlar qual tela será exibida */}
                <Login /> {/* Renderize o componente de Login ou Register com base na navegação */}
            </View>
        </ImageBackground>
    );
};

export default Welcome;
