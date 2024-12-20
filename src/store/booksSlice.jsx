import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    books: {}
}



const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBooks(state, action) {
            state.books = action.payload;
        },
        removeBooks(state) {
            state.books = null;
        }
    },

});

export const {setBooks, removeBooks} = bookSlice.actions;

export default bookSlice.reducer;