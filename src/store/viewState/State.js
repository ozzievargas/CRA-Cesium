import { createSlice } from "@reduxjs/toolkit";

export const getInitialState = () => ({
    sideBarClosed: true,
    sideBarWidths: {},
});

const viewStateSlice = createSlice({
    name: "viewState",
    initialState: getInitialState(),
    reducers: {
        setSideBarClosed: (draft, { payload }) => {
            console.log("%c Line:13 🌶 payload", "color:#e41a6a", payload);
            draft.sideBarClosed = payload;
        },
        setSideBarWidth: (draft, { payload }) => {
            draft.sideBarWidths[payload[0]] = payload[1];
        },
    },
});

export const Reducer = viewStateSlice.reducer;
export const Actions = viewStateSlice.actions;
