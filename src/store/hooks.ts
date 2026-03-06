import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';

import type { AppDispatch, RootState } from './store';

type DispatchFunction = () => AppDispatch;

export const useCounterDispatch: DispatchFunction = () => useDispatch<AppDispatch>();
export const useCounterSelector: TypedUseSelectorHook<RootState> = useSelector;
