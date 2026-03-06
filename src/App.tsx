import type { FC } from 'react';
import { counterSlice } from './store/counter-slice';
import { useCounterDispatch, useCounterSelector } from './store/hooks';

const App: FC = () => {
	const dispatch = useCounterDispatch();
	const counterValue = useCounterSelector((state) => state.counter.value);

	return (
		<>
			<h1>Redux Counter example</h1>
			<h2>Current counter value: {counterValue}</h2>
			<button onClick={() => dispatch(counterSlice.actions.increment(1))}>Increment 1</button>
			<button onClick={() => dispatch(counterSlice.actions.increment(5))}>Increment 5</button>
			<button onClick={() => dispatch(counterSlice.actions.decrement(1))}>Decrement 1</button>
			<button onClick={() => dispatch(counterSlice.actions.decrement(5))}>Decrement 5</button>
		</>
	);
};

export default App;
