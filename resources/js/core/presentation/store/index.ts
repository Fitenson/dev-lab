import { configureStore } from "@reduxjs/toolkit";

import loadingReducer from "@/core/presentation/store/loadingSlice";
import userReducer from "@/pages/user/redux/userDataTableSlice";


export const store = configureStore({
    reducer: {
        loading: loadingReducer,
        userDataTable: userReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
