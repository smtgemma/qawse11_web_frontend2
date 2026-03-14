import { makeStore } from './store';
import { persistStore } from 'redux-persist';

export const store = makeStore();
export const persistor = persistStore(store);

