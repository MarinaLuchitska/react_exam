import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { apiGet } from "../../services/api.service";
import type {ImagesConfig} from "../../models/ImagesConfig.ts";

type ConfigSliceState = {
    images: ImagesConfig | null;
};

const initState: ConfigSliceState = { images: null };

// GET /configuration -> { images, change_keys }
export const loadTmdbConfig = createAsyncThunk(
    "config/loadTmdbConfig",
    async (_, thunkAPI) => {
        const data = await apiGet<{ images: ImagesConfig }>("/configuration");
        return thunkAPI.fulfillWithValue(data.images);
    }
);

export const configSlice = createSlice({
    name: "configSlice",
    initialState: initState,
    reducers: {},
    extraReducers: (b) =>
        b.addCase(
            loadTmdbConfig.fulfilled,
            (state, action: PayloadAction<ImagesConfig>) => {
                state.images = action.payload;
            }
        ),
});

export const configActions = { ...configSlice.actions, loadTmdbConfig };
export default configSlice;
