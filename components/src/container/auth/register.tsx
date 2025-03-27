import React, { useState } from "react";
import { View, Text, Alert, ActivityIndicator, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../shared/services";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import {
    FormControl,
    FormControlError,
    FormControlErrorText,
    FormControlErrorIcon,
    FormControlLabel,
    FormControlLabelText,
    FormControlHelper,
    FormControlHelperText,
} from "@/components/ui/form-control";
import { AlertCircleIcon } from "lucide-react-native";
import { Divider } from "@/components/ui/divider";
import { setAuth } from "@/components/src/shared/store/authSlice";
import { useDispatch } from "react-redux";

export type RootStackParamList = {
    Home: undefined;
    Register: undefined;
    Login: undefined;
};

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [isInvalid, setIsInvalid] = useState(false);
    const dispatch = useDispatch();

    const handleRegister = async () => {
        setLoading(true);
        try {
            const response = await api.post("/user", { name, email, password });
            const { token } = response.data;

            dispatch(setAuth(token));
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
            navigation.navigate("Home");
        } catch (error) {
            Alert.alert("Erro", "Erro ao cadastrar o usuário");
            console.error("Erro no cadastro:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleNavigateToLogin = () => {
        navigation.navigate("Login");
    };

    return (
        <ImageBackground
            source={require("../../../../assets/gymLogin.jpg")}
            style={{ flex: 1, justifyContent: "center", padding: 20 }}
            resizeMode="cover"
        >
            <View className="bg-white p-8 rounded-2xl max-w-md w-full mx-auto">
                <View className="mb-8">
                    <Text className="text-3xl font-bold text-gray-800">Crie sua conta,</Text>
                    <Text className="text-3xl font-bold text-purple-700">Monstro</Text>
                </View>

                <FormControl isInvalid={isInvalid} size="lg">
                    <FormControlLabel>
                        <FormControlLabelText>Nome</FormControlLabelText>
                    </FormControlLabel>
                    <Input className="my-1" size={'lg'}>
                        <InputField
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChangeText={setName}
                        />
                    </Input>

                    <FormControlLabel>
                        <FormControlLabelText>Email</FormControlLabelText>
                    </FormControlLabel>
                    <Input className="my-1" size={'lg'}>
                        <InputField
                            type="text"
                            placeholder="E-mail"
                            value={email}
                            keyboardType="email-address"
                            onChangeText={setEmail}
                        />
                    </Input>

                    {isInvalid && (
                        <FormControlError>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                E-mail inválido.
                            </FormControlErrorText>
                        </FormControlError>
                    )}

                    <FormControlLabel>
                        <FormControlLabelText>Senha</FormControlLabelText>
                    </FormControlLabel>
                    <Input className="my-1">
                        <InputField
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChangeText={setPassword}
                        />
                    </Input>
                    <FormControlHelper>
                        <FormControlHelperText>
                            A senha deve ter pelo menos 6 caracteres.
                        </FormControlHelperText>
                    </FormControlHelper>

                    {isInvalid && (
                        <FormControlError>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                Senha inválida.
                            </FormControlErrorText>
                        </FormControlError>
                    )}
                </FormControl>

                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <View className="flex flex-row gap-2 mt-4">
                        <Button onPress={handleRegister} size="md" variant="solid" className="flex-1 bg-purple-700">
                            <ButtonText>Cadastrar</ButtonText>
                        </Button>
                    </View>
                )}

                <Divider />

                <View className="flex flex-row justify-center mt-4">
                    <TouchableOpacity onPress={handleNavigateToLogin}>
                        <Text className="text-sm text-purple-700">Já tem uma conta? Faça Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Register;
