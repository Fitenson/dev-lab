import { LaravelPaginator } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RowSelectionState, SortingState, VisibilityState } from "@tanstack/react-table";
import { UserModel } from "../schema/userSchema";


interface UserDataTableState {
    columnVisibility: VisibilityState;
    rowSelection: RowSelectionState;
    sorting: SortingState;
    params: {
        per_page: number,
        order: "asc" | "desc",
        sort: string
    };
    data: LaravelPaginator<UserModel> | null;
}


const initialState: UserDataTableState = {
    columnVisibility: {},
    rowSelection: {},
    sorting: [],
    params: {
        per_page: 10,
        order: "desc",
        sort: "created_at"
    },
    data: null,
}


const userDataTableState = createSlice({
    name: "user-data-table",
    initialState,
    reducers: {
        setColumnVisibility: (state, action: PayloadAction<VisibilityState>) => {
            state.columnVisibility = action.payload;
        },
        setRowSelection: (state, action: PayloadAction<RowSelectionState>) => {
            state.rowSelection = action.payload;
        },
        setSorting: (state, action: PayloadAction<SortingState>) => {
            state.sorting = action.payload;
        },
        setParams: (state, action: PayloadAction<UserDataTableState["params"]>) => {
            state.params = {...state.params, ...action.payload};
        },
        setIndexData: (state, action: PayloadAction<LaravelPaginator<UserModel>>) => {
            state.data = action.payload;
        },
        resetTable: () => initialState,
    }
});


export const {
    setColumnVisibility,
    setRowSelection,
    setSorting,
    setParams,
    setIndexData,
    resetTable,
} = userDataTableState.actions;

export default userDataTableState.reducer;
