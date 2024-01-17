import { createSlice } from '@reduxjs/toolkit'

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState: {
        width: 200,
        height: 200,
        color: "#FFFFFF",
        backgroundColor: "#000000",
        opacity: 1,
        borderRadius: 0,
        transform: {
            rotate: 0
        },
        boxShadow: "",
        fontSize: 15
    },
    reducers: {
        width: (state, action) => {
            state.width = action.payload
        },
        height: (state, action) => {
            state.height = action.payload
        },
        borderRadius: (state, action) => {
            state.borderRadius = action.payload
        },
        backgroundColor: (state, action) => {
            state.backgroundColor = action.payload
        },
        rotate: (state, action) => {
            state.transform.rotate = action.payload
        },
        opacity: (state, action) => {
            state.opacity = action.payload
        },
        boxShadow: (state, action) => {
            state.boxShadow = action.payload
        },
        color: (state, action) => {
            state.color = action.payload
        },
        fontSize: (state, action) => {
            state.fontSize = action.payload
        },
    }
})