import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Papa from 'papaparse';

// Define a thunk for fetching and parsing the CSV file
export const fetchCsvData = createAsyncThunk('api/fetchCsvData', async () => {
    const response = await axios.get('https://raw.githubusercontent.com/ANHVU280598/nettruyen-scrapping/main/comics.json');
    const jsonData = response.data;
    return jsonData;
});

const csvDataSlice = createSlice({
    name: 'csvData',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
        copyData: [],
        hotData: []
    },
    reducers: {
        resetStatus: (state) => {
            state.status = 'idle';
        },
        sortData: (state) => {
            state.data = state.data.sort((a, b) => b.love - a.love)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCsvData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCsvData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.copyData = action.payload;
                state.hotData = action.payload.sort((a,b) => b.rating - a.rating)
            })
            .addCase(fetchCsvData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { resetStatus, sortData } = csvDataSlice.actions;

export default csvDataSlice.reducer;