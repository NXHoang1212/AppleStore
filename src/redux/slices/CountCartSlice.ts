import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AxiosInstance from '../../utils/AxiosIntance';
import { CartEntity } from '../../model/entity/IndexCart.entity';


export const fetchGetCountCart = createAsyncThunk<CartEntity[], string>(
    'cart/fetchGetCountCart',
    async (id) => {
        try {
            const response = await AxiosInstance().get(`/api/cart/getCartUserId/${id}`);
            return response.data
        } catch (error) {
            console.log('fetchGetCountCart error:', error);
        }
    }
);


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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGetCountCart.fulfilled, (state, action) => {
            if (action.payload) {
                state.itemCount = action.payload.length;
            } else {
                state.itemCount = 0; // hoặc giá trị mặc định khác
            }
        });
        builder.addCase(fetchGetCountCart.rejected, (state, action) => {
            console.log('fetchGetCountCart error:', action.error);
        });
        builder.addCase(fetchGetCountCart.pending, (state) => {
            console.log('fetchGetCountCart pending');
        });
    }

})

export default CountCartSlice.reducer;
export const { setItemCount, incrementItemCount, decrementItemCount } = CountCartSlice.actions;
