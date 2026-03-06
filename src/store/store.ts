import { counterSlice } from './../../node_modules/@reduxjs/toolkit/src/listenerMiddleware/tests/listenerMiddleware.withTypes.test-d';
import { configureStore } from '@reduxjs/toolkit';

configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
});
