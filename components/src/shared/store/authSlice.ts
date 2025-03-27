import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = true;
            state.token = action.payload;
            AsyncStorage.setItem("authToken", action.payload); // Salva no AsyncStorage
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            AsyncStorage.removeItem("authToken"); // Remove do AsyncStorage
        },
        loadAuth: (state, action: PayloadAction<string | null>) => {
            state.isAuthenticated = !!action.payload;
            state.token = action.payload;
        },
    },
});

export const { setAuth, logout, loadAuth } = authSlice.actions;
export default authSlice.reducer;
