import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
	value: number;
};

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state, action: PayloadAction<number>) {
			state.value += action.payload;
		},
		decrement(state, action: PayloadAction<number>) {
			state.value -= action.payload;
		},
	},
});
