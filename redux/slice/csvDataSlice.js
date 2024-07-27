import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Papa from 'papaparse';

// Define a thunk for fetching and parsing the CSV file
export const fetchCsvData = createAsyncThunk('api/fetchCsvData', async () => {
    const response = await axios.get('https://raw.githubusercontent.com/ANHVU280598/nettruyen-scrapping/main/ComicGeneral.csv');
    const csvData = response.data;

    // Parse the CSV data
    const parsedData = Papa.parse(csvData, { header: true }).data;

    return parsedData;
});

const csvDataSlice = createSlice({
    name: 'csvData',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        resetStatus: (state) => {
            state.status = 'idle';
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
            })
            .addCase(fetchCsvData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { resetStatus } = csvDataSlice.actions;

export default csvDataSlice.reducer;