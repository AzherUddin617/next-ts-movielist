import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../../typings'
import type { RootState } from '../index'

type PayloadDataType = {
    id: number | string;
    movie: Movie;
}

export type BookmarkDataType = {
    [key: number | string]: {
        active: boolean;
        movie: Movie;
    }
}

interface BookmarkState {
    data: BookmarkDataType
}


const initialState: BookmarkState = {
    data: {}
}

export const counterSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        addToBookmark: (state, action: PayloadAction<PayloadDataType>) => {
            const { id, movie } = action.payload;
            state.data[id] = {
                active: true,
                movie,
            }
        },
        removeFromBookmark: (state, action: PayloadAction<PayloadDataType>) => {
            const id = action.payload.id;
            if (id in state.data && state.data[id]?.active) {
                state.data[id].active = false;
                delete state.data[id];
            }
        },
        toggleBookmark: (state, action: PayloadAction<PayloadDataType>) => {
            const { id, movie } = action.payload;
            if (id in state.data) {
                state.data[id].active = !state.data[id].active;
            } else {
                state.data[id] = {
                    active: true,
                    movie,
                }
            }
        },
    }
})

export const { addToBookmark, removeFromBookmark, toggleBookmark } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectBookmarkData = (state: RootState) => state.bookmark.data;

export default counterSlice.reducer