import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AppState {
    isLoading: boolean;
    error: string | null;
    isEmpty: boolean;
}


const initialState: AppState = {
    isLoading: false,
    error: null,
    isEmpty: false
};


const appState = createSlice({
    name: "state",
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
        setIsEmpty(state, action: PayloadAction<boolean>) {
            state.isEmpty = action.payload;
        }
    }
});

export const { setIsLoading, setError, setIsEmpty } = appState.actions;
export default appState.reducer;
