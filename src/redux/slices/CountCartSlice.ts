import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CountCartsState {
    itemCount: number;
}


const initialState: CountCartsState = {
    itemCount: 0
}

const CountCartSlice = createSlice({
    name: 'countCart',
    initialState,
    reducers: {
        setItemCount: (state: CountCartsState, action: PayloadAction<number>) => {
            state.itemCount = action.payload;
        },
        incrementItemCount: (state: CountCartsState) => {
            state.itemCount += 1;
        },
        decrementItemCount: (state: CountCartsState) => {
            if (state.itemCount > 0) {
                state.itemCount -= 1;
            }
        },
    }
})

export default CountCartSlice.reducer;
export const { setItemCount, incrementItemCount, decrementItemCount } = CountCartSlice.actions;
